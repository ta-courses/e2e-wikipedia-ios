.PHONY: build

export EXCLUDED_ARCHS=arm64

build:
	xcodebuild -quiet -scheme "Wikipedia" \
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
	rm -rf sut/Build
	rm -rf sut/DerivedData
	rm -rf sut/Logs
	rm -rf sut/Index
	rm -rf sut/SourcePackages
	rm -rf sut/ModuleCache.noindex
	rm -rf sut/info.plist
	rm -rf sut/Wikipedia.xcworkspace/xcshareddata/swiftpm


