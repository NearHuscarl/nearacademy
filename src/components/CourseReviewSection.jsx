import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from './Headings';
import Pagination from './Pagination';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';
import PercentageBar, { PercentageBarText } from './PercentageBar';
import { courseReviewProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';
import { SearchBar } from './Input';
import { SizedBox } from './Common';

const ReviewStatsContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(min-content, 45rem) max-content 3rem;
	column-gap: 1rem;
	align-items: center;
`;
const ReviewBar = styled(PercentageBar)`
	& > * {
		font-size: 1.1rem;
	}
`;
const Percent = styled.div`
	color: ${appColors.primaryDark};
	font-size: 1.1rem;
`;

function ReviewStats({ percent, totalReview, star }) {
	const reviews = Math.round(totalReview * percent).toLocaleString();
	return (
		<ReviewStatsContainer>
			<ReviewBar value={percent * 100}>
				<PercentageBarText>{`${reviews} ratings`}</PercentageBarText>
			</ReviewBar>
			<StarRating score={star} maxScore={5} />
			<Percent>{`${(percent * 100).toFixed(0)}%`}</Percent>
		</ReviewStatsContainer>
	);
}

ReviewStats.propTypes = {
	percent: PropTypes.number.isRequired,
	totalReview: PropTypes.number.isRequired,
	star: PropTypes.number.isRequired,
};

const Summary = styled.div`
	display: flex;
`;
const Score = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 0 1rem;
	margin-right: 3rem;

	& > :not(:last-child) {
		margin-bottom: 0.75rem;
	}
`;
const ScoreNumber = styled.div`
	font-size: 7.2rem;
	font-weight: 600;
	line-height: 1;
`;
const Stats = styled.div`
	flex: 1;

	& > :not(:last-child) {
		margin-bottom: 1rem;
	}
`;
const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 3rem;
	margin-bottom: 1.5rem;
`;

export default function CourseReviewSection({ review }) {
	const { totalReview } = review;
	return (
		<>
			<H2>Student feedback</H2>
			<SizedBox height={1.5} />
			<Summary>
				<Score>
					<ScoreNumber>{review.rating}</ScoreNumber>
					<StarRating score={review.rating} maxScore={5} />
					<div>Course Rating</div>
				</Score>
				<Stats>
					<ReviewStats
						star={1}
						percent={review.ratio.one}
						totalReview={totalReview}
					/>
					<ReviewStats
						star={2}
						percent={review.ratio.two}
						totalReview={totalReview}
					/>
					<ReviewStats
						star={3}
						percent={review.ratio.three}
						totalReview={totalReview}
					/>
					<ReviewStats
						star={4}
						percent={review.ratio.four}
						totalReview={totalReview}
					/>
					<ReviewStats
						star={5}
						percent={review.ratio.five}
						totalReview={totalReview}
					/>
				</Stats>
			</Summary>
			<Search>
				<H2>Reviews</H2>
				<SearchBar placeholder='Find reviews...' width={30} />
			</Search>
			<SizedBox height={1.5} />
			{review.reviews.map((r, i) => {
				const key = i;
				return (
					<React.Fragment key={key}>
						<ReviewCard review={r} />
						{i !== review.reviews.length - 1 && (
							<SizedBox height={1.75} />
						)}
					</React.Fragment>
				);
			})}
			<SizedBox height={2.5} />
			<Pagination />
		</>
	);
}

CourseReviewSection.propTypes = {
	review: courseReviewProps.isRequired,
};
