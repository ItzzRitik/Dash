import { Image, Pressable, Text, View } from 'react-native';

import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled, { useTheme } from 'styled-components/native';

import BackSVG from '#assets/icons/arrowLeft.svg';
import Icon from '#components/base/Icon';

export default function HeaderView ({ title }) {
	const theme = useTheme(),
		insets = useSafeAreaInsets(),

		user = { avatar: '' };

	return (
		<Header top={insets.top} intensity={theme.general.blur} tint={theme.name === 'light' ? 'light' : 'dark'}>
			<MainContainer>
				<Back android_ripple={{ borderless: true }}>
					<Icon><BackSVG width='40%' height='40%' fill={theme.color.contentPrimary} /></Icon>
				</Back>
				<Title android_ripple={{ borderless: true }}><TitleText>{title}</TitleText></Title>
				<Avatar android_ripple={{ borderless: true }} onPress={() => {}}>
					<AvatarImage source={{ uri: user.avatar }}
						style={{ width: theme.size.headerHeight - 15, height: theme.size.headerHeight - 15 }}
					/>
				</Avatar>
			</MainContainer>
		</Header>
	);
}

const Header = styled(BlurView) < { top } > `
		position: absolute;
		top: 0;
		width: 100%;
		height: ${({ theme, top }) => theme.size.headerHeight + top}px;
		padding-top: ${({ top }) => top}px;
	`,
	MainContainer = styled(View)`
		flex: 1;
		flex-direction: row;
	`,
	Back = styled(Pressable)`
		width: ${({ theme }) => theme.size.headerHeight}px;
		height: ${({ theme }) => theme.size.headerHeight}px;
		justify-content: center;
		padding-left: 10px;
	`,
	Title = styled(Pressable)`
		flex: 1;
		justify-content: center;
		align-items: center;
	`,
	TitleText = styled(Text)`
		font-size: 18px;
		font-weight: bold;
		color: ${({ theme }) => theme.color.contentPrimary};
	`,
	Avatar = styled(Pressable)`
		width: ${({ theme }) => theme.size.headerHeight}px;
		height: ${({ theme }) => theme.size.headerHeight}px;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		overflow: hidden;
	`,
	AvatarImage = styled(Image)`
		border-radius: 999px;
	`;