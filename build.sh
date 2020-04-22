package=${PWD##*/}

mv ./package.json ./wait

mv ./package.build.json ./package.json

if [ ! -d "node_modules" ]; then
    yarn
fi

tsc --outDir ./build

cd ..

if [ ! -d "_builds" ]; then
    mkdir _builds
fi

cd _builds

if [ -d $package ]; then
    rm -r $package
fi

mkdir $package
cd $package

if [ -d "build" ]; then
    rm -r build
fi

cp -r ../../$package/build ./build
cp ../../$package/wait ./package.json

# if [ ! -d "../../$package/src/assets" ]; then
#     mkdir ../../$package/src/assets
# fi

# if [ ! -d "../../$package/src/assets/fonts" ]; then
#     mkdir ../../$package/src/assets/fonts
# fi

cp -r ../../$package/src/assets ./build/assets
cp -r ../../$package/src/interfaces ./build/interfaces

cp -r ../../$package/src/styles/*.css ./build/styles
cp -r ../../$package/src/styles/animations/*.css ./build/styles/animations

cd ../../$package

mv ./package.json ./package.build.json

mv ./wait ./package.json