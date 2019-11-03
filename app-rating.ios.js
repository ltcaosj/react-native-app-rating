import { NativeModules } from "react-native";

const { LKAppRating } = NativeModules;

const startAppRating = ({ appleStoreId, playStoreAppId }) => {
  LKAppRating.rate(appleStoreId);
};

export { LKAppRating, startAppRating };
