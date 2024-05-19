# ionic scripts

### version

node@v18.14.2
ionic@7.1.1

```bash
npm install -g @ionic/cli native-run cordova-res
ionic start --list
ionic start rock-exam tabs --type=react --capacitor

# ionic integrations enable capacitor --quiet -- diary io.ionic.starter
# npm i --save -E @capacitor/core@latest
# npm i -D -E @capacitor/cli@latest
# npm i --save -E @capacitor/haptics @capacitor/app @capacitor/keyboard @capacitor/status-bar
# capacitor init diary io.ionic.starter --web-dir dist
# cordova-res --skip-config --copy


yarn add -E @capacitor/ios@6.0.0
capacitor add ios

yarn add -E @capacitor/android@6.0.0
capacitor add android
# https://capacitorjs.com/docs/basics/workflow

ionic build
ionic cap add android
ionic cap add ios

# copy static dist to android studio or xcode
ionic cap copy
# sync installed packages
ionic cap sync

npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem -S
npm install @ionic/pwa-elements -S
```

> Android Part

```bash
ionic cap open android
npm install @capacitor/toast -S
```

> React Part

```bash
npm install -D sass
npm i jwt-decode -S
npm i path-browserify -S
npm install @ionic/pwa-elements -S
```

### Plugins

```bash
app haptics keyboard status-bar
```

### dev

```bash
ionic cap run android --livereload --external
```

### prod

icon & splash

```bash
npx cordova-res android --skip-config --copy
npx cordova-res ios --skip-config --copy
```

### icon&splash

```bash
cordova-res --skip-config --copy
```
