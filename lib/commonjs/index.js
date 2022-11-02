"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minimize = exports.goBack = exports.exit = void 0;

var _reactNative = require("react-native");

const LINKING_ERROR = `The package 'react-native-minimizer' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const Minimizer = _reactNative.NativeModules.Minimizer ? _reactNative.NativeModules.Minimizer : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});

const minimize = () => {
  console.log('minimize');
  Minimizer.minimize();
};

exports.minimize = minimize;

const goBack = () => {
  console.log('goBack');
  Minimizer.goBack();
};

exports.goBack = goBack;

const exit = () => {
  console.log('exit');
  Minimizer.exit();
};

exports.exit = exit;
//# sourceMappingURL=index.js.map