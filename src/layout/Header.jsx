import React from 'react';
import { useHistory } from 'react-router-dom';
import {
	faBell,
	faShoppingCart,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import { SearchBar } from '../components/Input';
import { ButtonText } from '../components/Buttons';
import ProfileTooltip from '../components/ProfileTooltip';
import NotificationTooltip from '../components/NotificationTooltip';
import StickyHeader from '../components/StickyHeader';
import styled, { appColors, theme } from '../styles';
import routes from '../routes';
import { activeUser } from '../data/users';

const ButtonWithCounter = styled(ButtonText)`
	position: relative;

	&:hover,
	&:active,
	&:focus {
		color: currentcolor;
	}

	&::after {
		content: '';
		position: absolute;
		top: 10%;
		left: 80%;
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background-color: ${appColors.red};
		opacity: ${(props) => (props.hasNotification ? '100%' : '0%')};
	}
`;

function NotificationButton() {
	const [hasNotification, setHasNottification] = React.useState(true);
	return (
		<NotificationTooltip>
			<ButtonWithCounter
				hasNotification={hasNotification}
				onClick={() => {
					setHasNottification(false);
				}}
			>
				<FontAwesomeIcon icon={faBell} />
			</ButtonWithCounter>
		</NotificationTooltip>
	);
}

const HeaderContainer = styled.header`
	margin: 0 auto;
`;
const TopBackground = styled.div`
	background-color: ${appColors.greyLight1};
`;
const Top = styled.div`
	display: flex;
	align-items: center;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
	padding: 0.7rem 0;
`;

const Support = styled.span`
	margin-right: auto;
	font-size: 1.2rem;

	.grey {
		color: ${appColors.greyDark1};
	}
`;
const Profile = styled(ButtonText)`
	display: flex;
`;
const ProfileImage = styled.img`
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	object-fit: cover;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);

	margin-right: 0.7rem;
	cursor: pointer;
`;
const ProfileName = styled.span`
	margin-right: 2rem;
	font-weight: 600;
	display: inline-flex;
	align-items: center;
`;
const Counter = styled.span`
	position: absolute;
	top: -1.1rem;
	right: -1.1rem;
	font-size: 4rem;
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2.5rem 0;
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;
`;

function Header() {
	const history = useHistory();

	return (
		<HeaderContainer>
			<NotificationTooltip />
			<TopBackground>
				<Top>
					<Support>
						<span>Hotline: 1900-0000&nbsp;</span>
						<span className='grey'>(Support from 7AM to 10PM)</span>
					</Support>
					<ProfileTooltip>
						<Profile>
							<ProfileImage
								src={activeUser.avatar}
								alt='profile avatar'
							/>
							<ProfileName>{`Hello ${activeUser.name}`}</ProfileName>
						</Profile>
					</ProfileTooltip>
					<NotificationButton />
				</Top>
			</TopBackground>
			<Main>
				<Logo />
				<SearchBar
					placeholder='Search for courses, exercises, documents...'
					width={32}
				/>
				<ButtonText
					type='button'
					onClick={() => history.push(routes.cart.path)}
				>
					<span>Your cart </span>
					<span className='fa-layers fa-fw'>
						<FontAwesomeIcon icon={faShoppingCart} size='lg' />
						<Counter className='fa-layers-counter fa-3x'>5</Counter>
					</span>
				</ButtonText>
			</Main>
			<StickyHeader>
				<Nav />
			</StickyHeader>
		</HeaderContainer>
	);
}

export default Header;
