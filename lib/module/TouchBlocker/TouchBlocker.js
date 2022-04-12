function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { PanResponder, View } from 'react-native';
const panResponder = PanResponder.create({
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
  return /*#__PURE__*/React.createElement(View, _extends({}, props, panHanlders));
};

export default TouchBlocker;
//# sourceMappingURL=TouchBlocker.js.map