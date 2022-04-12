"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const panResponder = _reactNative.PanResponder.create({
  onPanResponderTerminationRequest: () => false,
  onStartShouldSetPanResponderCapture: () => true,
  onShouldBlockNativeResponder: () => true
});

const TouchBlocker = _ref => {
  let {
    enableTouchEvents = false,
    ...props
  } = _ref;
  const panHanlders = enableTouchEvents ? {} : panResponder.panHandlers;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, panHanlders));
};

var _default = TouchBlocker;
exports.default = _default;
//# sourceMappingURL=TouchBlocker.js.map