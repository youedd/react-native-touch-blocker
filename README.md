# react-native-touch-blocker

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/youedd/react-native-touch-blocker/Test%20CI)
[![npm](https://badgen.net/npm/v/react-native-touch-blocker)](https://www.npmjs.com/package/react-native-touch-blocker)
![typescript](https://badgen.net/npm/types/tslib)
[![License](https://badgen.net/github/license/youedd/react-native-touch-blocker)](https://github.com/youedd/react-native-touch-blocker/blob/main/LICENSE)
[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)

TouchBlocker is a React Native and React Native Web component that helps blocking the user from interacting with children components.

## Install

```bash
npm install react-native-touch-blocker --save
```

or

```bash
yarn add react-native-touch-blocker
```

## Demo

Test it online on [Expo](https://snack.expo.dev/@youedd/react-native-touch-blocker-demo)

## Usage

```JSX
<TouchBlocker>
  <Button
    title="Can't Touch This 😎"
    onPress={() => null}
  />
</TouchBlocker>
```

## Props

| Prop              | Default |   Type   | Description                            |
| :---------------- | :-----: | :------: | :--------------------------------------|
| enableTouchEvents | false   | Boolean  | Allow children to receive touch events |


The TouchBlocker component also supports [React Native View Props](https://reactnative.dev/docs/view#props).
