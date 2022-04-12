import React from 'react'
import { PanResponder, View } from 'react-native'
import { TouchBlockerProps } from './types'

const panResponder = PanResponder.create({
  onPanResponderTerminationRequest: () => false,
  onStartShouldSetPanResponderCapture: () => true,
  onShouldBlockNativeResponder: () => true
})

const TouchBlocker: React.FC<TouchBlockerProps> = ({
  enableTouchEvents = false,
  ...props
}) => {
  const panHanlders = enableTouchEvents ? {} : panResponder.panHandlers
  return <View {...props} {...panHanlders} />
}

export default TouchBlocker
