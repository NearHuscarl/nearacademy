import React, { forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import { activeUser as user } from '../data/users';
import { Line } from './Common';
import { ButtonText } from './Buttons';
import Tooltip from './Tooltip';
import styled, { appColors } from '../styles';
import routes from '../routes';

const Content = styled.div`
	padding: 1.5rem 2.25rem;
	padding-bottom: 1px;

	li {
		line-height: 2;
	}
`;
const Divider = styled(Line)`
	min-width: 20rem;
`;
const Small = styled.div`
	font-size: 1.1rem;
	color: ${appColors.greyDark1};
`;
const UserInfo = styled.div`
	display: grid;
	grid-template-columns: min-content max-content;
	grid-template-rows: repeat(2, max-content);
	column-gap: 1rem;
	margin-bottom: 1.2rem;
`;
const Avatar = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	grid-row: 1 / -1;
`;
const Username = styled(ButtonText)`
	font-weight: 600;
	text-align: left;
`;

function TooltipContent() {
	const history = useHistory();
	return (
		<Content>
			<UserInfo>
				<Avatar src={user.avatar} alt='avatar' />
				<Username
					onClick={() => history.push(`${routes.profile.path}/${user.id}`)}
				>
					{user.name}
				</Username>
				<Small>{user.email}</Small>
			</UserInfo>
			<ul>
				<li>
					<ButtonText>My courses</ButtonText>
				</li>
				<Divider />
				<li>
					<ButtonText>Favorite courses</ButtonText>
				</li>
				<li>
					<ButtonText>Favorite exercises</ButtonText>
				</li>
				<li>
					<ButtonText>Favorite exams</ButtonText>
				</li>
				<li>
					<ButtonText>Favorite documents</ButtonText>
				</li>
				<li>
					<ButtonText>Favorite questions</ButtonText>
				</li>
				<Divider />
				<li>
					<ButtonText>Manage your account</ButtonText>
				</li>
				<Divider />
				<li>
					<ButtonText>Help</ButtonText>
				</li>
				<li>
					<ButtonText onClick={() => history.push(routes.login.path)}>
						Log out
					</ButtonText>
				</li>
			</ul>
		</Content>
	);
}

const ThisWillWork = forwardRef((props, ref) => {
	return <span ref={ref} {...props} />;
});
export default function ProfileTooltip({ children }) {
	return (
		<Tooltip
			content={<TooltipContent />}
			animation='shift-away'
			interactive
			placement='top-end'
		>
			<ThisWillWork>{children}</ThisWillWork>
		</Tooltip>
	);
}
