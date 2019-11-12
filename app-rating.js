import {NativeModules} from 'react-native';

const {LKAppRating} = NativeModules;

const startAppRating = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.rate(playStoreAppId);
};

const openAppStore = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.openAppStore(playStoreAppId);
};

export {LKAppRating, startAppRating, openAppStore};
