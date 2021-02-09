import { View, useAnimationState } from 'moti';
import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

interface Props extends Omit<PressableProps, 'style'> {
	value?: number;
	style?: ViewStyle
}

export default function TouchableLift(props: Props) {
	const { style, value, ...other } = props;

	const animationState = useAnimationState({
		from: {
			translateY: 0,
		},
		bigger: {
			translateY: value ? [value - 5, value] : [-10, -5],
		},
	});

	const pressedIn = () => {
		animationState.transitionTo('bigger');
	};
	const pressedOut = () => {
		animationState.transitionTo('from');
	};
	return (
		<Pressable {...other} onPressIn={pressedIn} onPressOut={pressedOut}>
			<View
				style={style}
				state={animationState}
				transition={{
					type: 'timing',
				}}
			>
				{props.children}
			</View>
		</Pressable>
	);
}
