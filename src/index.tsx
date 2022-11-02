import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-minimizer' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Minimizer = NativeModules.Minimizer
  ? NativeModules.Minimizer
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const minimize = (): void => {
  console.log('minimize');
  Minimizer.minimize();
};

export const goBack = (): void => {
  console.log('goBack');
  Minimizer.goBack();
};

export const exit = (): void => {
  console.log('exit');
  Minimizer.exit();
};
