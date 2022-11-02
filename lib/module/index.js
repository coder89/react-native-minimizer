import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-minimizer' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const Minimizer = NativeModules.Minimizer ? NativeModules.Minimizer : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});
export const minimize = () => {
  console.log('minimize');
  Minimizer.minimize();
};
export const goBack = () => {
  console.log('goBack');
  Minimizer.goBack();
};
export const exit = () => {
  console.log('exit');
  Minimizer.exit();
};
//# sourceMappingURL=index.js.map