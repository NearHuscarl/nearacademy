import React from 'react';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import StarRating from '../components/StarRating';
import CourseBanner from '../components/CourseBanner';
import { PrimaryWhiteButton } from '../components/Buttons';
import FeatureBox from '../components/FeatureBox';
import CourseSummaryList from '../components/CourseSummaryList';
import CourseList from '../components/CourseList';
import TeacherDetail from '../components/TeacherDetail';
import { SizedBox, FormattedText } from '../components/Common';
import { H1, H2 } from '../components/Headings';
import Ads from '../components/Ads';
import { FeatureReviewCard } from '../components/ReviewCard';
import CourseReviewSection from '../components/CourseReviewSection';
import styled, { appColors, theme } from '../styles';
import courses, { courseDetail as course } from '../data/courses';
import { biologyTeacher } from '../data/teachers';
import review from '../data/courseReviews';

const colLeftWidth = 60;
const colRightWidth = 28;
const colGap = 3;
const HeaderBg = styled.div`
	background-color: ${appColors.darkBlue};
	color: ${appColors.greyLight1};
`;
const MainLayout = styled(ContentContainer)`
	display: grid;
	grid-template-columns: minmax(min-content, ${colLeftWidth}rem) ${colRightWidth}rem;
	column-gap: ${colGap}rem;
`;
const Header = styled(MainLayout)`
	padding: 6rem 0;
	font-size: 1.5rem;

	h1,
	h2 {
		color: inherit;
	}

	h2 {
		font-weight: 400;
	}
`;
const Stats = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;
`;
const HeaderRight = styled.div`
	position: relative;
	z-index: 1;
`;
const HeaderRightContent = styled.div`
	position: absolute;
	background-color: ${appColors.white};
	color: ${theme.fontColor};

	& > :not(:last-child) {
		margin-bottom: 1.5rem;
	}

	& > button {
		border: solid 1px rgba(20, 23, 28, 0.1);
	}

	[alt='notads'] {
		margin-bottom: 2.2rem;
		img {
			width: 100%;
			height: 15rem;
		}
	}

	button {
		width: 100%;
		padding: 1rem 0.5rem;
		margin: 0.5rem 0;
		font-size: 1.5rem;
	}
`;
const BuyToday = styled.div`
	display: flex;
	border-radius: ${theme.borderRound};
	box-shadow: none;

	.icon {
		flex: 0 0 4.5rem;
		background-color: ${appColors.primary};
		border: solid 1px ${appColors.primary};
		border-bottom-left-radius: ${theme.borderRound};
		border-top-left-radius: ${theme.borderRound};
		color: ${appColors.white};
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text {
		flex: 1;
		padding-left: 0.5rem;
		padding: 1rem 0.75rem;
		border-bottom-right-radius: ${theme.borderRound};
		border-top-right-radius: ${theme.borderRound};
		border: solid 1px rgba(20, 23, 28, 0.1);
		border-left: none;

		strong {
			font-weight: 600;
			color: ${appColors.primary};
		}
	}
`;

function CoursePreviewHeader() {
	return (
		<HeaderBg>
			<Header>
				<div>
					<H1>{course.title}</H1>
					<H2>{course.description}</H2>
					<Stats>
						<StarRating score={course.rating} maxScore={5} />
						<SizedBox width={1} />
						<span>{`${course.rating}/5 (${course.ratingCount} lượt đánh giá)`}</span>
						<SizedBox width={1} />
						<span>{`${course.students} lượt đăng ký học`}</span>
					</Stats>
					<Stats>
						<span>{`Giảng viên: ${course.teacher}`}</span>
						<SizedBox width={1} />
						<span>{`Lần cập nhật cuối: ${course.lastUpdate}`}</span>
					</Stats>
				</div>
				<HeaderRight>
					<HeaderRightContent>
						<CourseBanner course={course} />
						<PrimaryWhiteButton>Chia sẻ khóa học</PrimaryWhiteButton>
						<BuyToday>
							<div className='icon'>
								<FontAwesomeIcon icon={faUsers} />
							</div>
							<div className='text'>
								<strong>50</strong> người đã mua trong hôm nay
							</div>
						</BuyToday>
						<Ads count={4} />
					</HeaderRightContent>
				</HeaderRight>
			</Header>
		</HeaderBg>
	);
}

const Main = styled.main`
	margin-bottom: 7rem;
`;
const TwoColumn = styled(MainLayout)`
	margin-top: 3rem;
`;
const OneColumn = styled.div`
	margin-top: 3rem;
	max-width: ${colLeftWidth + colGap + colRightWidth}rem;
`;
const ColumnLeft = styled.div`
	& > :not(:first-child) {
		margin-top: 3rem;
	}
`;
const Section = styled.section`
	&:not(:first-child) {
		margin-top: 3rem;
	}
	& > h2 {
		margin-bottom: 1.5rem;
	}
`;
const RequirementSection = styled(Section)`
	ul {
		list-style: inside;

		li:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}
`;
const Paragraph = styled(FormattedText)`
	white-space: pre-line;
`;

const CoursePreviewPage = () => (
	<>
		<Breadcrumb
			path={[
				routes.home,
				routes.courses,
				'Super Plus: Chinh phục bài tập nâng cao - Môn Sinh học',
			]}
		/>
		<Main>
			<CoursePreviewHeader />
			<ContentContainer>
				<TwoColumn>
					<ColumnLeft>
						<FeatureBox features={course.features} />
						<CourseSummaryList course={course} />
						<RequirementSection>
							<H2>Yêu cầu</H2>
							<ul>
								{course.requirements.map((f, i) => {
									const key = i;
									return <li key={key}>{f}</li>;
								})}
							</ul>
						</RequirementSection>
						<Section>
							<H2>Mô tả khóa học</H2>
							<Paragraph>{course.courseDescription}</Paragraph>
						</Section>
					</ColumnLeft>
					<div />
				</TwoColumn>
				<OneColumn>
					<Section>
						<H2>Đánh giá nổi bật</H2>
						<FeatureReviewCard review={review.reviews[0]} />
					</Section>
					<Section>
						<H2>Thường được mua cùng</H2>
						<CourseList courses={courses.slice(0, 2)} alwaysShowPrice />
					</Section>
					<Section>
						<TeacherDetail teacher={biologyTeacher} />
					</Section>
					<Section>
						<H2>Cùng giáo viên</H2>
						<CourseList courses={courses.slice(2, 4)} alwaysShowPrice />
					</Section>
					<Section>
						<CourseReviewSection review={review} />
					</Section>
				</OneColumn>
			</ContentContainer>
		</Main>
	</>
);

export default CoursePreviewPage;
