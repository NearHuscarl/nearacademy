import React from 'react';
import { H3 } from '../components/Headings';
import CommentSection from '../components/CommentSection';
import { Bold } from '../components/Common';
import styled from '../styles';
import { biologyTeacher } from '../data/teachers';

const Header = styled.div`
	display: flex;
	align-items: center;
`;
const Avatar = styled.img`
	width: 5rem;
	height: 5rem;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 1.5rem;
`;
const Body = styled.div`
	margin: 2.5rem 0;
`;
const Heading3 = styled(H3)`
	margin-bottom: 1.8rem;
`;

function Post() {
	return (
		<article>
			<Header>
				<Avatar src={biologyTeacher.image} alt='teacher' />
				<div>
					<Bold>{biologyTeacher.name}</Bold>
					<div>Posted 1 month ago</div>
				</div>
			</Header>
			<Body>
				<div>Hi all!</div>
				<br />
				<div>
					Hi all!
					I have been getting so many questions, so I will reply
					globally now: I will submit a completely new and revamped course for NearAcademy's review next
					Monday! From there, it will take 1-2 days until the course
					launches! So there is no real date, but the course should be
					about 1 week away now 🎉
				</div>
				<br />
				<em>Thịnh Nam</em>
			</Body>
		</article>
	);
}

export default function CourseDetailPageAnnouncement() {
	return (
		<section>
			<Post />
			<Heading3>Comment</Heading3>
			<CommentSection />
		</section>
	);
}
