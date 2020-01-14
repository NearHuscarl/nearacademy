import range from 'lodash/range';
import sample from 'lodash/sample';
import PreviewBiology from '../../public/images/course-biology.png';
import PreviewPhysics from '../../public/images/course-physics.png';
import PreviewMath from '../../public/images/course-math.png';
import PreviewEnglish from '../../public/images/course-english.png';
import PreviewChemistry from '../../public/images/course-chemistry.png';
import { maleNames, femaleNames } from './names';
import year from './year';

const randomMaleName = () => sample(maleNames);
const randomFemaleName = () => sample(femaleNames);
const description = (subject) =>
	`The ultimate video tutorial and prep program for ${subject} domination using the new version of the national exam.`;

const _courses = [
	{
		id: 1,
		title: 'Super Plus: Master Advance Exercises - Biology',
		image: PreviewBiology,
		subject: 'Biology',
		teacher: randomMaleName(),
		description: description('biology'),
		rating: 3,
		ratingCount: 620,
		price: 1200000,
		originalPrice: 1500000,
		publishDate: '31/10/2019',
		students: 1200,
		tags: [
			'Advance exercises',
			'Master Biology exercises',
			'Advance Biolology exercises',
		],
	},
	{
		id: 2,
		title: `Super Plus: Prepare for advance Physics national exam ${year}`,
		image: PreviewPhysics,
		subject: 'Physics',
		teacher: randomMaleName(),
		description: description('physics'),
		rating: 3,
		ratingCount: 620,
		price: 1450000,
		originalPrice: 1650000,
		publishDate: '31/10/2019',
		students: 1020,
		tags: [
			'National exam prep',
			'Physics national exam prep',
			'Advance Physics exercises',
		],
	},
	{
		id: 3,
		title: 'Super Plus: Prepare for advance national exam - Math',
		image: PreviewMath,
		subject: 'Math',
		teacher: randomMaleName(),
		description: description('math'),
		rating: 3,
		ratingCount: 720,
		price: 1250000,
		originalPrice: 1450000,
		publishDate: '31/10/2019',
		students: 1605,
		tags: [
			'National exam prep',
			'Math national exam prep',
			'Advance Math exercises',
		],
	},
	{
		id: 4,
		title: `Super Plus: Prepare for advance English national exam ${year}`,
		image: PreviewEnglish,
		subject: 'English',
		teacher: randomFemaleName(),
		description: description('english'),
		rating: 3,
		ratingCount: 720,
		price: 1250000,
		originalPrice: 1450000,
		publishDate: '31/10/2019',
		students: 1605,
		tags: [
			'National exam prep',
			'English national exam prep',
			'Advance English exercises',
		],
	},
	{
		id: 5,
		title: `Super Plus: Prepare for advance Chemistry national exam ${year}`,
		image: PreviewChemistry,
		subject: 'Chemistry',
		teacher: randomMaleName(),
		description: description('chemistry'),
		rating: 3,
		ratingCount: 720,
		price: 1250000,
		originalPrice: 1450000,
		publishDate: '31/10/2019',
		students: 1605,
		tags: [
			'National exam prep',
			'Chemistry national exam prep',
			'Advance Chemistry exercises',
		],
	},
];

const courses = [..._courses, ..._courses];

export const courseDetail = {
	..._courses[0],
	lastUpdate: '10/12/2019',
	totalVideo: 250,
	videoLength: '24:00:00',
	summary: [
		{
			title: 'Course summary',
			length: '10:00',
			videos: [
				{
					title: 'Introduction to the course',
					summary: 'Help students get an overview of the course',
					length: '06:00',
					preview: true,
				},
				{
					title: 'How to download course documents',
					length: '02:00',
					preview: false,
				},
				{
					title: 'How to post question for help on forum',
					length: '02:00',
					preview: false,
				},
			],
		},
		{
			title: 'Solving advance Biology exercises 12',
			length: '08:00:00',
			videos: range(0, 100).map((i) => ({
				title: 'Biology exercise ' + i,
				length: '06:00',
				preview: false,
			})),
		},
		{
			title: 'Solving advance Biology exams',
			length: '08:00:00',
			videos: range(0, 50).map((i) => ({
				title: 'Biology exercise ' + i,
				length: '06:00',
				preview: false,
			})),
		},
		{
			title: 'Quickly solving exercises using casio calculator',
			length: '04:00:00',
			videos: range(0, 50).map((i) => ({
				title: 'Biology exercise ' + i,
				length: '06:00',
				preview: false,
			})),
		},
		{
			title: 'Sample exam prep',
			length: '03:50:00',
			videos: range(0, 47).map((i) => ({
				title: 'Biology exercise ' + i,
				length: '06:00',
				preview: false,
			})),
		},
	],
	features: [
		'How to solve advance Biology exercises in 12th grade curriculum.',
		'How to solve advance Biology exercises in national exam.',
		'How to quickly solve advance Biology multiple-choice questions using casio calculator.',
		'Get familiar with multiple advance sample tests composed by Thịnh Nam.',
	],
	requirements: [
		'Basic Biology knowledge in 12th grade curriculum.',
		'Computer or smartphone with internet connection.',
		'Casino calculator.',
	],
	courseDescription: `This course is designed to help you [master the biology portion] of the new national exam through [biology hacks] and [biology fundamentals]. The hardest part of the biology national exam is understanding what the question is asking you. In my course you will learn how to read the national exam biology questions and how to solve all the problems that the exam can throw at you along with a study plan.

	I have spent [five years] teaching national exam classes and tutoring students on the national exam biology. I have practiced hundreds of problems and narrowed down the most common problems on the national exam and the easiest way to solve them. All of my students have improved their scores after tutoring with me and I am going to share my techniques with you in this course.`,
};

export default courses;
