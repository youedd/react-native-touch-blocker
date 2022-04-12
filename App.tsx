import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import TouchBlocker from './src'

const App: React.FC = () => {
  const [touchEnabled, setTouchEnabled] = React.useState(true)
  const [background, setBackground] = React.useState('#FFFFFF')

  const toggleTouch = (): void => {
    setTouchEnabled((value) => !value)
  }

  const changeBackground = (): void => {
    setBackground(randomColor())
  }

  return (
    <View style={[Styles.container, { backgroundColor: background }]}>
      <Button
        title={touchEnabled ? 'Disable Touch' : 'Enable Touch'}
        onPress={toggleTouch}
      />
      <TouchBlocker enableTouchEvents={touchEnabled}>
        <Button title='Change background' onPress={changeBackground} />
      </TouchBlocker>
    </View>
  )
}

const randomColor = (): string =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  }
})

export default App
