import { NativeModules } from "react-native";

const { LKAppRating } = NativeModules;

const startAppRating = ({ appleStoreId, playStoreAppId }) => {
  LKAppRating.rate(playStoreAppId);
};

export { LKAppRating, startAppRating };
