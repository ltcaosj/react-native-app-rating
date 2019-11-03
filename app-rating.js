import { NativeModules } from "react-native";

const { LKAppRating } = NativeModules;

const startAppRating = ({ appleId, playStoreAppId }) => {
  LKAppRating.rate(playStoreAppId);
};

export { LKAppRating, startAppRating };
