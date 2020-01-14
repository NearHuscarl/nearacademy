import React from 'react';
import { H1 } from '../components/Headings';
import CommentSection from '../components/CommentSection';
import styled from '../styles';

const H1Small = styled(H1)`
	font-size: 2.5rem;
	margin-bottom: 1rem;
`;

export default function CourseDetailPageQuestions() {
	return (
		<section>
			<H1Small>Questions and Answers</H1Small>
			<CommentSection />
		</section>
	);
}
