import React from "react";
import { Button, StyleSheet, View } from "react-native";
import TouchBlocker from "./src/TouchBlocker";

export default function App() {
  const [touchEnabled, setTouchEnabled] = React.useState(true);
  const [background, setBackground] = React.useState("#FFFFFF");
  return (
    <View style={{ ...Styles.container, backgroundColor: background }}>
      <Button
        title={touchEnabled ? "Disable Touch" : "Enable Touch"}
        onPress={() => {
          setTouchEnabled((value) => !value);
        }}
      />
      <TouchBlocker enableTouchEvents={touchEnabled}>
        <Button
          title="Change background"
          onPress={() => {
            setBackground(randomColor());
          }}
        />
      </TouchBlocker>
    </View>
  );
}

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
