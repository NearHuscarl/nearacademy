import React from 'react';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import { SizedBox, Line } from '../components/Common';
import TeacherDetail from '../components/TeacherDetail';
import CourseList from '../components/CourseList';
import { H2, H1 } from '../components/Headings';
import CourseReviewSection from '../components/CourseReviewSection';
import styled, { appColors } from '../styles';
import { babeDetail } from '../data/teachers';
import courses from '../data/courses';
import review from '../data/courseReviews';
import StatsBackground from '../../public/images/teacher-stats-background.jpg';

const imageWidth = '90rem';
const BannerContainer = styled.div`
	position: relative;
`;
const Banner = styled.img`
	max-height: 48rem;
	width: ${imageWidth};
	display: flex;
	margin: 0 auto;
`;
const NameWrapper = styled.div`
	top: 35%;
	left: calc((100vw - ${imageWidth}) / 2);
	position: absolute;
`;
const Name = styled(H1)`
	background: linear-gradient(to right, ${appColors.primary}, ${appColors.primaryDark});
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const Role = styled(H2)`
	font-weight: 400;
	font-size: 2.5rem;
	color: ${appColors.greyDark1};
	text-transform: uppercase;
`;
const Stats = styled.div`
	background-image: url(${StatsBackground});
	background-position: center;
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.75);
	background-blend-mode: darken;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-repeat: no-repeat;

	& > * {
		height: 20rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		column-gap: 1rem;
	}

	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.value {
		color: ${appColors.primary};
		font-weight: 600;
		font-size: 3.2rem;
	}

	.label {
		color: ${appColors.white};
		font-size: 1.6rem;
	}
`;
const Content = styled(ContentContainer)`
	margin-top: 3.6rem;
	margin-bottom: 7rem;
`;

const TeacherDetailPage = () => {
	return (
		<main>
			<Breadcrumb path={[routes.home, routes.teacher, babeDetail.name]} />
			<BannerContainer>
				<Banner src={babeDetail.banner} alt='banner' />
				<NameWrapper>
					<Line />
					<Name>{babeDetail.name}</Name>
					<Role>{babeDetail.role}</Role>
					<Line />
				</NameWrapper>
			</BannerContainer>
			<Stats>
				<ContentContainer>
					<div className='item'>
						<div className='value'>{babeDetail.rating}</div>
						<div className='label'>Average Rating</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.ratings}</div>
						<div className='label'>Reviews</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.students}</div>
						<div className='label'>Students</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.courses}</div>
						<div className='label'>Courses</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.experience}</div>
						<div className='label'>Years of Experience</div>
					</div>
				</ContentContainer>
			</Stats>
			<Content>
				<SizedBox height={5.5} />
				<TeacherDetail teacher={babeDetail} />
				<SizedBox height={4} />
				<H2>Frequently bought together</H2>
				<SizedBox height={1.5} />
				<CourseList courses={courses.slice(2, 4)} alwaysShowPrice />
				<SizedBox height={4} />
				<CourseReviewSection review={review} />
			</Content>
		</main>
	);
};

export default TeacherDetailPage;
