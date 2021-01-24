#!/usr/bin/env groovy

properties([
    pipelineTriggers([
        pollSCM('*/ * * * *') //every 1 minute
    ])
])

stage("Setup env") {
    deleteDir()
    checkout scm
    sh 'xcodebuild -verison'
}