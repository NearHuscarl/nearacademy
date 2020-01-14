import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Button, { WhiteButton } from './Buttons';
import { Link, Bold, SizedBox } from './Common';
import { H4 } from './Headings';
import styled, { appColors, theme } from '../styles';
import { courseProps } from '../utilities/proptypes';
import routes from '../routes';

const Video = styled(VideoPlayer)`
	[alt='thumbnail'] {
		width: 28rem;
		height: 24rem;
	}
`;
const Banner = styled.div`
	box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1);
	border-bottom-left-radius: ${theme.borderRound};
	border-bottom-right-radius: ${theme.borderRound};

	& > :not(:first-child) {
		padding: 2rem 2.5rem;
	}

	.price {
		display: flex;
		align-items: center;
	}

	.discount {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}

	ul {
		margin-left: 1rem;
	}
`;
const Price = styled.span`
	color: ${appColors.secondary};
	margin-right: 1rem;
	font-weight: 600;
	font-size: 2.2rem;
`;

export default function CourseBanner({ course }) {
	const history = useHistory();
	return (
		<Banner>
			<Link to='/course/001'>
				<Video thumbnail={course.image} />
			</Link>
			<div>
				<div className='price'>
					<Price>{`${course.price.toLocaleString()}đ`}</Price>
					<strike>{`${course.originalPrice.toLocaleString()}đ`}</strike>
				</div>
				<div className='discount'>
					<Bold as='span'>3 </Bold>
					<span>days left for your discount</span>
				</div>
				<Button
					type='button'
					onClick={() => history.push(routes.cart.path)}
				>
					Add to cart
				</Button>
				<WhiteButton type='button'>Buy now</WhiteButton>
				<SizedBox height={1} />
				<div>
					<H4>Subject</H4>
					<ul>
						<li>🢒 {course.subject}</li>
					</ul>
					<H4>This course includes</H4>
					<ul>
						<li>🢒 24 hours on-demand video </li>
						<li>🢒 {course.totalVideo} lectures</li>
						<li>🢒 20 sample exams</li>
					</ul>
				</div>
			</div>
		</Banner>
	);
}

CourseBanner.propTypes = {
	course: courseProps.isRequired,
};
