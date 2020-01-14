import * as profile from './users';
import { randomBetweenInt } from '../utilities/random';

const randomRating = () => randomBetweenInt(0, 5);
const randomDate = () => `${randomBetweenInt(1, 29)} days ago`;

const review = {
	rating: randomRating(),
	totalReview: 3569,
	ratio: {
		one: 0.04,
		two: 0.08,
		three: 0.18,
		four: 0.26,
		five: 0.56,
	},
	reviews: [
		{
			avatar: profile.elon,
			name: 'elon musk',
			rating: randomRating(),
			date: randomDate(),
			review:
				'This course is absolutely amazing! Highly recommend it to everyone. it is very thorough and at the same time straight to the point! Mason is an excellent instructor, he explains everything so well! Take this course.',
		},
		{
			name: 'near',
			avatar: profile.near,
			rating: randomRating(),
			date: randomDate(),
			review:
				'Everything is more than great! It’s sad that he don’t use his talent be make a lot of money!',
		},
		{
			name: 'snowflake chihuahua',
			avatar: profile.chihuahua,
			rating: randomRating(),
			date: randomDate(),
			review: 'It is a bit lengthy and can drag on at times but is also very thorough. While some of the concepts he explains can be redundant, Jesse Patrick does a great job of explaining the material.',
		},
		{
			name: 'mia khafila',
			avatar: profile.miaKhafila,
			rating: randomRating(),
			date: randomDate(),
			review: 'he says to go practice after he gives a lesson about how to solve a problem and i dont see extra work...',
		},
		{
			name: 'no face',
			avatar: profile.noface,
			rating: randomRating(),
			date: randomDate(),
			review: 'Good at explaining things, could get monotonous at times.',
		},
	],
};

export default review;
