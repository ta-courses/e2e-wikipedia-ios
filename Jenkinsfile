properties([
    pipelineTriggers([
        pollSCM('*/1 * * * *') //every 1 minute
    ])
])

timeout(time: 1, unit: 'HOURS') {
    node {
        timestamps {
            stage('Setup env') {
                deleteDir()
                checkout scm
                sh 'xcodebuild -version'
                sh 'brew install applesimutils || true'
                sh 'brew install yarn || true'
                sh 'yarn global add react-native-cli'
                sh 'yarn global add detox-cli'
                sh 'yarn install'
            }
            stage('Compile') {
                sh 'yarn tsc'
            }
            stage('Setup SUT') {
                // make clonesut
                sh 'make clean'
                sh 'make build'
            }
            try {
                stage('E2E test') {
                    sh 'detox clean-framework-cache && detox build-framework-cache'
                    sh 'yarn test'
                }
            }
            finally {
                stage('Archive artifact') {
                    archiveArtifacts allowEmptyArchive: true, artifacts: 'report/**', excludes: '**/.DS_Store', followSymlinks: false
                    junit allowEmptyResults: true, testResults: 'report/**/*.xml'
                }
            }
        }
    }
}
