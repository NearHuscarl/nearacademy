import React from 'react';
import { H2 } from './Headings';
import { Bold, FormattedText, Link } from './Common';
import {
	FacebookButton,
	TwitterButton,
	YoutubeButton,
	GoogleButton,
} from './Buttons';
import { teacherProps } from '../utilities/proptypes';
import styled from '../styles';
import routes from '../routes';

const Heading = styled(H2)`
	margin-bottom: 1.5rem;
`;
const Container = styled.div`
	display: flex;
`;
const ColLeft = styled.div`
	flex: 0 0 20rem;
	padding-right: 3rem;
`;
const ColRight = styled.div`
	flex: 1 0;
`;

const Avatar = styled.img`
	width: 9.5rem;
	height: 9.5rem;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 1rem;
	box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
`;
const BioListItem = styled.li`
	margin-bottom: 0.75rem;
`;
const Name = styled(Link)`
	font-size: 1.6rem;
`;
const Summary = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Media = styled.div`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: repeat(4, 1fr);
`;
const Paragraph = styled(FormattedText)`
	margin-top: 1rem;
	white-space: pre-line;
	line-height: 1.7;
`;

export default function TeacherDetail({ teacher }) {
	return (
		<>
			<Heading>About teacher</Heading>
			<Container>
				<ColLeft>
					<Avatar src={teacher.image} alt='teacher' />
					<ul>
						{teacher.bio.map((b, i) => {
							const key = i;
							return (
								<BioListItem key={key}>
									<FormattedText>{b}</FormattedText>
								</BioListItem>
							);
						})}
					</ul>
				</ColLeft>
				<ColRight>
					<Summary>
						<div>
							<Name to={`${routes.teacher.path}/001`}>{teacher.name}</Name>
							<Bold>{teacher.role}</Bold>
						</div>
						<Media>
							<FacebookButton />
							<YoutubeButton />
							<GoogleButton />
							<TwitterButton />
						</Media>
					</Summary>
					<Paragraph>{teacher.description}</Paragraph>
				</ColRight>
			</Container>
		</>
	);
}

TeacherDetail.propTypes = {
	teacher: teacherProps.isRequired,
};
