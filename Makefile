.PHONY: build

export EXCLUDED_ARCHS=arm64

build:
	echo EXCLUDED_ARCHS=${EXCLUDED_ARCHS}
	xcodebuild -scheme "Wikipedia" \
		-UseModernBuildSystem=true \
		-workspace "sut/Wikipedia.xcworkspace" \
		-configuration Debug \
		-derivedDataPath sut/ \
		-sdk iphonesimulator 

clean:
	xcodebuild -scheme "Wikipedia" \
		-UseModernBuildSystem=true \
		-workspace "sut/Wikipedia.xcworkspace" \
		-configuration Debug \
		-derivedDataPath sut \
		-sdk iphonesimulator clean

