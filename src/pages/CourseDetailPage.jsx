import React from 'react';
import ThumbnailImage from '../../public/images/video-thumbnail.jpg';
import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import CourseHeader from '../layout/CourseHeader';
import VideoPlayer from '../components/VideoPlayer';
import CourseProgressList from '../components/CourseProgressList';
import CourseDetailPageOverview from './CourseDetailPage_Overview';
import CourseDetailPageQuestions from './CourseDetailPage_Questions';
import CourseDetailPageAnnouncement from './CourseDetailPage_Announcement';
import CourseDetailPageFlag from './CourseDetailPage_Flag';
import styled from '../styles';
import { courseDetail } from '../data/courses';

const Content = styled.main`
	display: flex;
`;
const ColLeft = styled.div`
	max-width: 85rem;
`;
const ColRight = styled.div`
	width: 35rem;
	flex: 1 0 auto;
	background-color: #dedfe0;
`;

const StyledTabs = styled(Tabs)`
	padding: 4.5rem;

	[role='tablist'] {
		margin-bottom: 2.5rem;
	}
`;

const CourseDetailPage = () => {
	return (
		<>
			<CourseHeader title={courseDetail.title} />
			<Content>
				<ColLeft>
					<VideoPlayer thumbnail={ThumbnailImage} />
					<StyledTabs>
						<TabList>
							<Tab>Tổng quan</Tab>
							<Tab>Bình luận & Hỏi đáp</Tab>
							<Tab>Đánh dấu</Tab>
							<Tab>Thông báo</Tab>
						</TabList>
						<TabPanel>
							<CourseDetailPageOverview course={courseDetail} />
						</TabPanel>
						<TabPanel>
							<CourseDetailPageQuestions />
						</TabPanel>
						<TabPanel>
							<CourseDetailPageFlag />
						</TabPanel>
						<TabPanel>
							<CourseDetailPageAnnouncement />
						</TabPanel>
					</StyledTabs>
				</ColLeft>
				<ColRight>
					<CourseProgressList courseProgress={courseDetail.summary} />
				</ColRight>
			</Content>
		</>
	);
};

export default CourseDetailPage;
