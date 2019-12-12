import {NativeModules} from 'react-native';

const {LKAppRating} = NativeModules;

const startAppRating = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.rate(appleStoreId);
};

const openAppStore = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.openAppStore(appleStoreId);
};

const writeReview = ({appleStoreId, playStoreAppId}) => {
  LKAppRating.writeReview(appleStoreId);
};

export {LKAppRating, startAppRating, openAppStore, writeReview};
