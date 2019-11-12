import {NativeModules} from 'react-native';

const {LKAppRating} = NativeModules;

const startAppRating = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.rate(appleStoreId);
};

const openAppStore = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.openAppStore(appleStoreId);
};

export {LKAppRating, startAppRating, openAppStore};
