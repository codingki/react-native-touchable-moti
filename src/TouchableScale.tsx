import { View, useAnimationState } from 'moti';
import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

interface Props extends Omit<PressableProps, 'style'> {
	value?: number;
	style?: ViewStyle;
}

export default function TouchableScale(props: Props) {
	const { style, value, ...other } = props;

	const animationState = useAnimationState({
		from: {
			scale: 1,
		},
		bigger: {
			scale: value ? [value + 0.05, value] : [1.15, 1.1],
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
