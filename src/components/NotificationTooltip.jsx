import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FormattedText, Bold } from './Common';
import Tooltip from './Tooltip';
import { ButtonText } from './Buttons';
import styled, { appColors } from '../styles';
import notifications from '../data/notifications';
import routes from '../routes';
import { notificationProps } from '../utilities/proptypes';

const Container = styled.div`
	max-width: 38rem;
`;
const Top = styled.div`
	height: 3.2rem;
	padding: 0 1.2rem;
	display: flex;
	align-items: center;

	button {
		font-size: 1.1rem;
	}

	& > :first-child {
		margin-right: auto;
	}
	& > :last-child {
		margin-left: 1rem;
	}
`;
const ListItem = styled.li`
	padding: 1.3rem 1.6rem;
	cursor: pointer;

	:nth-child(odd) {
		background-color: ${appColors.greyLight0};
	}
`;
const UserInfo = styled.div`
	display: grid;
	grid-template-columns: min-content 100%;
	grid-template-rows: repeat(2, max-content);
	column-gap: 1rem;
	align-items: center;

	font-size: 1.3rem;
`;
const Avatar = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	grid-row: 1 / -1;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
`;
const Body = styled(FormattedText)`
	width: 80%;
	align-self: flex-end;
`;
const Small = styled.div`
	font-size: 1.1rem;
	color: ${appColors.greyDark1};
	align-self: flex-start;
`;
const Bottom = styled.div`
	color: #385898;
	text-align: center;
	height: 3rem;

	button {
		font-weight: 600;
	}
`;

export function Notifications({ list }) {
	const history = useHistory();
	return (
		<>
			<Top className='top'>
				<Bold className='title'>Notifications</Bold>
				<ButtonText className='top-button'>
					Mark all as read
				</ButtonText>
				<ButtonText className='top-button'>Settings</ButtonText>
			</Top>
			<ul>
				{list.map((n, i) => {
					const key = i;
					return (
						<ListItem
							key={key}
							onClick={() =>
								history.push(`${routes.notification.path}/001`)
							}
						>
							<UserInfo>
								<Avatar src={n.image} alt='avatar' />
								<Body>{n.body}</Body>
								<Small>{n.date}</Small>
							</UserInfo>
						</ListItem>
					);
				})}
			</ul>
		</>
	);
}

Notifications.propTypes = {
	list: PropTypes.arrayOf(notificationProps).isRequired,
};

function TooltipContent() {
	const history = useHistory();
	return (
		<Container>
			<Notifications list={notifications.slice(0, 3)} />
			<Bottom>
				<ButtonText onClick={() => history.push(routes.notification.path)}>
					See all
				</ButtonText>
			</Bottom>
		</Container>
	);
}

const Child = forwardRef((props, ref) => {
	return <span ref={ref} {...props} />;
});
export default function NotificationTooltip({ children }) {
	return (
		<Tooltip
			content={<TooltipContent />}
			animation='shift-away'
			interactive
			placement='top-end'
		>
			<Child>{children}</Child>
		</Tooltip>
	);
}
