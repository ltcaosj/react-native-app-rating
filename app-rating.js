import {NativeModules, Linking} from 'react-native';

const {LKAppRating} = NativeModules;

const startAppRating = ({appleStoreId, playStoreAppId}) => {
  Linking.openURL(`market://details?id=${playStoreAppId}`)
};

const openAppStore = ({appleStoreId, playStoreAppId}) => {
  Linking.openURL(`market://details?id=${playStoreAppId}`)
};

const writeReview = ({appleStoreId, playStoreAppId}) => {  
  Linking.openURL(`market://details?id=${playStoreAppId}`)
};

export {LKAppRating, startAppRating, openAppStore, writeReview};
