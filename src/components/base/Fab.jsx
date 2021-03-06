import { useEffect } from 'react';
import { Pressable } from 'react-native';

import { clamp } from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled, { useTheme } from 'styled-components/native';

import Icon from './Icon';

export default function Fab (props) {
	const theme = useTheme(),
		{
			iconName = 'add',
			size = 'default',
			backgroundColor = theme.color.brandPrimary,
			foregroundColor = '#ffffff',
			setFabPadding,
		} = props,
		{ bottom } = useSafeAreaInsets(),

		[fabSize, iconSize] = FAB_SIZES[size] ?? FAB_SIZES.default;

	useEffect(() => {
		setFabPadding(bottom * 1.5 + fabSize);
	}, [bottom, fabSize, setFabPadding]);

	return (
		<FabLayout backgroundColor={backgroundColor} size={fabSize} bottom={bottom}>
			<Icon name={iconName} size={iconSize} color={foregroundColor} />
		</FabLayout>
	);
}

const FAB_SIZES = { default: [56, 28], mini: [50, 25] },
	FabLayout = styled(Pressable)`
		position: absolute;
		width: ${({ size }) => size}px;
		height: ${({ size }) => size}px;
		bottom: ${({ bottom }) => clamp(bottom, 20, 35)}px;
		right: ${({ bottom }) => clamp(bottom, 20, 25)}px;
		border-radius: 999px;
		background-color: ${({ backgroundColor }) => backgroundColor};
		justify-content: center;
		align-items: center;
	`;
