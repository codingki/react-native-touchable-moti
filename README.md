# React Native Animated Touchable Component

![Preview](preview.gif)

# Documentation

- [Installation](#Installation)
- [Props](#Props)
- [Usage](#Usage)

## Installation

This component uses Moti, which uses Reanimated 2 so you need to install Moti and Reanimated 2.

### Install Moti

    npm install moti

### Install Reanimated 2

Moti requires that you install `react-native-reanimated`. The minimum version of Reanimated it's been tested on is `2.0.0-rc.0`.

### If you're using Expo

Please follow the [Expo instructions](https://docs.expo.io/versions/latest/sdk/reanimated/#experimental-support-for-v2) for installing `react-native-reanimated` v2.

You'll need at least [Expo SDK 40](https://docs.expo.io/workflow/upgrading-expo-sdk-walkthrough/).

### If you aren't using Expo

Please follow Reanimated's [installation instructions](https://docs.swmansion.com/react-native-reanimated/docs/installation) for v2.

### Install the package

    npm install react-native-touchable-moti

## Props

| Props                                                          | Required | TochableScale Default Value | TouchableLift Default Value |
| -------------------------------------------------------------- | -------- | --------------------------- | --------------------------- |
| [PressableProps](https://reactnative.dev/docs/pressable#props) |          |                             |                             |
| style                                                          | yes      |                             |                             |
| value                                                          | no       | 1.1                         | -10                         |

## Usage

### Import

    import { TouchableScale, TouchableLift } from  'react-native-touchable-moti';

### TouchableScale

    <TouchableScale style={styles.button}>
        <Text style={styles.text}>Press me!</Text>
    </TouchableScale>

### TouchableLift

    <TouchableLift style={styles.button}>
        <Text style={styles.text}>Press me!</Text>
    </TouchableLift>

You can use it as a wrapper too, like this

    <TouchableLift onPress={()=>{console.log('Pressed')}>
        <View style={styles.button}>
    	    <Text style={styles.text}>Press me!</Text>
        </View>
    </TouchableLift>
