import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from '../components/Common';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import {
	FacebookButton,
	TwitterButton,
	YoutubeButton,
	GoogleButton,
} from '../components/Buttons';
import ContentContainer from '../layout/ContentContainer';
import { userDetail } from '../data/users';
import styled from '../styles';
import { H1 } from '../components/Headings';

const Main = styled.main`
	margin-bottom: 7rem;
`;
const Container = styled(ContentContainer)`
	display: flex;
	justify-content: space-between;
	margin-top: 4.5rem;
`;
const Profile = styled.div`
	display: flex;

	h1 {
		font-size: 2rem;
	}

	li {
		line-height: 1.75;
	}
`;
const Avatar = styled.img`
	width: 15rem;
	height: 15rem;
	border-radius: 50%;
	box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);

	margin-right: 3rem;
`;
const Media = styled.div`
	& > :not(:last-child) {
		margin-right: 1rem;
	}
`;

const ProfilePage = ({ match }) => {
	const user = userDetail(match.params.id);
	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.profile, user.id]} />
			<Container>
				<Profile>
					<Avatar src={user.avatar} alt='avatar' />
					<ul>
						<li>
							<H1>{user.id}</H1>
						</li>
						<li>
							<Bold as='span'>Name: </Bold>
							<span>{user.name}</span>
						</li>
						<li>
							<Bold as='span'>Birthday: </Bold>
							<span>{user.birthday}</span>
						</li>
						<li>
							<Bold as='span'>School: </Bold>
							<span>{user.school}</span>
						</li>
						<li>
							<Bold as='span'>Province: </Bold>
							<span>{user.province}</span>
						</li>
						<li>
							<Bold as='span'>Register date: </Bold>
							<span>{user.registerDate}</span>
						</li>
					</ul>
				</Profile>
				<Media>
					<FacebookButton />
					<YoutubeButton />
					<GoogleButton />
					<TwitterButton />
				</Media>
			</Container>
		</Main>
	);
};

ProfilePage.propTypes = {
	match: PropTypes.any.isRequired,
};

export default ProfilePage;
