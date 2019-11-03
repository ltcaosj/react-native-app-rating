# react-native-app-rating

## Getting started

`$ npm install react-native-app-rating --save`

### Mostly automatic installation

`$ react-native link react-native-app-rating`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-app-rating` and add `LKAppRating.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libLKAppRating.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import lightkits.apprating.LKAppRatingPackage;` to the imports at the top of the file
  - Add `new LKAppRatingPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-app-rating'
  	project(':react-native-app-rating').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-app-rating/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-app-rating')
  	```


## Usage
```javascript
import LKAppRating from 'react-native-app-rating';

// TODO: What to do with the module?
LKAppRating;
```

## Create module command
create-react-native-module app-rating --prefix LK --package-identifier lightkits.apprating