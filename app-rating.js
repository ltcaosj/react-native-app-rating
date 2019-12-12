import {NativeModules} from 'react-native';

const {LKAppRating} = NativeModules;

const startAppRating = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.rate(playStoreAppId);
};

const openAppStore = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.openAppStore(playStoreAppId);
};

const writeReview = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.writeReview(appleStoreId);
};

export {LKAppRating, startAppRating, openAppStore, writeReview};
