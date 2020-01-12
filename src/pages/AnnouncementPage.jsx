import React from 'react';
import PropTypes from 'prop-types';
import Ads from '../components/Ads';
import { Link, SizedBox, FormattedText } from '../components/Common';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, {
	routes,
	breadCrumbPathProps,
} from '../components/Breadcrumb';
import VideoPlayer from '../components/VideoPlayer';
import { H1, H3 } from '../components/Headings';
import styled, { theme } from '../styles';
import announcements from '../data/announcements';
import VideoThumbnail from '../../public/images/notads-5.png';

const Thumbnail = styled.img`
	flex: 0 0 auto;
	width: 6rem;
	height: 6rem;
	border-radius: ${theme.borderRound};
	object-fit: cover;
	margin-right: 0.8rem;
`;
const Title = styled(Link)`
	font-size: 1.2rem;
	font-weight: normal;
	line-height: 1.4;
	display: inline-block;
`;
const Date = styled.div`
	font-size: 1rem;
`;
const List = styled.ul`
	li {
		display: flex;
	}
	& > :not(:last-child) {
		margin-bottom: 1.5rem;
	}
`;

function Announcements() {
	return (
		<>
			<H3>Thông báo mới nhất</H3>
			<List>
				{announcements.map((a) => (
					<li key={a.title}>
						<Thumbnail src={a.image} alt='announcement thumbnail' />
						<div>
							<Title to='/'>{a.title}</Title>
							<Date>{a.date}</Date>
						</div>
					</li>
				))}
			</List>
		</>
	);
}

const Main = styled.main`
	margin-bottom: 7rem;
`;
const Content = styled.div`
	display: flex;
	margin-top: 3.6rem;
	margin-bottom: 4.1rem;
`;
const ColLeft = styled.div`
	width: 64rem;
	margin-right: 4rem;

	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;
const Image = styled.img`
	width: 100%;
	margin-bottom: 2rem;
`;
const Paragraph = styled(FormattedText)`
	white-space: pre-wrap;
`;
const ColRight = styled.div`
	width: 24rem;

	h3 {
		margin-bottom: 1rem;
	}
`;
const Video = styled(VideoPlayer)`
	[alt='thumbnail'] {
		border-radius: ${theme.borderRound};
	}
	[alt='play'] {
		height: 75%;
	}
`;

export const AnnouncementPageBuilder = ({ path, title, image, body }) => (
	<Main>
		<Breadcrumb path={path} />
		<ContentContainer>
			<Content>
				<ColLeft>
					<H1>{title}</H1>
					<Image src={image} alt='teachers' />
					<Paragraph>{body}</Paragraph>
				</ColLeft>
				<ColRight>
					<H3>Hướng dẫn cho người mới</H3>
					<Video thumbnail={VideoThumbnail} />
					<SizedBox height={2} />
					<Announcements />
					<SizedBox height={2} />
					<Ads count={5} />
				</ColRight>
			</Content>
		</ContentContainer>
	</Main>
);

AnnouncementPageBuilder.propTypes = {
	path: breadCrumbPathProps.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

const AnnouncementPage = () => {
	const a = announcements[0];
	return (
		<AnnouncementPageBuilder
			path={[routes.home, routes.notification, a.title]}
			title={a.title}
			image={a.image}
			body={a.body}
		/>
	);
};

export default AnnouncementPage;
