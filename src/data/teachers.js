import sample from 'lodash/sample';
import range from 'lodash/range';
import Babe1 from '../../public/images/babe-1.png';
import Babe2 from '../../public/images/babe-2.png';
import Babe3 from '../../public/images/babe-3.png';
import Babe4 from '../../public/images/babe-4.jpg';
import Babe5 from '../../public/images/babe-5.jpg';
import Babe6 from '../../public/images/babe-6.png';
import Babe7 from '../../public/images/babe-7.jpg';
import Babe8 from '../../public/images/babe-8.jpg';
import BabeBaner from '../../public/images/teacher-banner.png';
import ChemistryTeacher from '../../public/images/teacher-chemistry.jpg';
import BiologyTeacher from '../../public/images/teacher-biology.jpg';
import { maleNames, femaleNames } from './names';
import universities from './universities';

const randomMaleName = () => sample(maleNames);
const randomFemaleName = () => sample(femaleNames);
const randomUni = () => sample(universities);
const description = (
	name,
	subject,
) => `Hi, I'm ${name}! I have been identified as one of [NearAcademy's Top Instructors] and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.

I'm a full-stack ${subject} teacher and designer with a passion for building ✨beautiful✨ things from scratch. I've been building websites and apps since 2007 and also have a Master's degree in Engineering.

It was in college where I first discovered my ❤️ for teaching and helping others by sharing all I knew. And that passion🔥🔥 brought me to [NearAcademy] in 2015, where my students love the fact that I take the time to explain important concepts in a way that everyone can easily understand.

🔎 Do you want to learn how to build awesome websites with advanced HTML and CSS?
🔎 Looking for a complete JavaScript course that takes you from beginner to advanced developer?
🔎 Or maybe you want to build modern and fast back-end applications with Node.js?

Then don't waste your 🕤 with random tutorials or incomplete videos. All my courses are easy-to-follow, all-in-one packages that will take your skills to the next level.

These courses are exactly the courses I wish I had when I was first getting into web development!

So see for yourself, 📣enroll in one of my courses💦 (or all of them :D) and join my [500,000+ happy students] today.`;

const chemistryName = randomMaleName();
const chemistryTeacher = {
	name: chemistryName,
	role:
		'Top-Rated Chemistry Instructor, making-life-simple coach, 9k+ Students',
	image: ChemistryTeacher,
	school: randomUni(),
	subject: '',
	experience: -1,
	bio: [
		`[${chemistryName}]`,
		randomUni(),
		'Subject: Chemistry',
		"Bachelor's degree",
	],
	summary: '',
	description: description(chemistryName, 'Chemistry'),
};

const biologyTeacher = {
	name: randomMaleName(),
	role: 'Test Prep Visionary and Education Specialist',
	image: BiologyTeacher,
	school: randomUni(),
	subject: '',
	experience: -1,
	bio: [
		'[6] Years of Experience',
		'[5/5] Average Ratings',
		'[1,200] Reviews',
		'[2,600] Students',
		'[3] Courses',
	],
	summary: '',
	description: description('Thịnh Văn Nam', 'Biology'),
};

const babeNames = range(0, 8).map(() => randomFemaleName());
const babeUnis = range(0, 8).map(() => randomUni());
const englishBabes = [
	{
		name: babeNames[0],
		role: 'English teacher at Near Academy',
		image: Babe1,
		school: babeUnis[0],
		subject: 'English',
		experience: 5, // in year
		bio: [
			`[${babeNames[0]}]`,
			babeUnis[0],
			'Subject: English',
			"Bachelor's degree",
		],
		summary:
			'I have thousands of students enrolled on my NearAcademy courses, which focus on learning English as a foreign language. My courses have some of the highest ratings in the Learning English category on NearAcademy.',
		description: description('Văn Trịnh Quỳnh Anh', 'English'),
	},
	{
		name: babeNames[1],
		role: 'English teacher at Near Academy',
		image: Babe2,
		school: babeUnis[1],
		subject: 'English',
		experience: 2, // in year
		summary:
			'With more than 30 years of teaching foreign language courses and 7 years of doing this activity online, I am among the best teachers you can choose. ',
		bio: [
			`[${babeNames[1]}]`,
			babeUnis[1],
			'Subject: English',
			"Bachelor's degree",
			'Relationship: Complicated',
			'Busy mom with 3 kids',
		],
		description: description('Đặng Tú Anh', 'English'),
	},
	{
		name: babeNames[2],
		role: 'English teacher at Near Academy',
		image: Babe3,
		school: babeUnis[2],
		subject: 'English',
		experience: 2, // in year
		summary:
			'I prefer to call myself a trainer or coach rather than teacher. Learning a new language is like learning any new skill: you need to practise and train every day to become better at doing it.',
		bio: [
			`[${babeNames[2]}]`,
			babeUnis[2],
			'Subject: English',
			"Bachelor's degree",
		],
		description: description('Trương Thị Ngọc Mai', 'English'),
	},
	{
		name: babeNames[3],
		role: 'English teacher at Near Academy',
		image: Babe4,
		school: babeUnis[3],
		subject: 'English',
		experience: 2, // in year
		summary:
			'I am working hard on implementing the newest AI (artificial intelligence) and AR (augmented reality) technologies to teach literally anything to anyone in the world in the most efficient and fun way possible.',
		bio: [
			`[${babeNames[3]}]`,
			babeUnis[3],
			'Subject: English',
			"Bachelor's degree",
		],
		description: description('Đỗ Thị Anh Thư', 'English'),
	},
	{
		name: babeNames[4],
		role: 'English teacher at Near Academy',
		image: Babe5,
		school: babeUnis[4],
		subject: 'English',
		experience: 5, // in year
		summary:
			'I was a teaching fellow at Harvard University, where I taught all skills, and an early version of my custom course in listening to real spoken English.',
		bio: [
			`[${babeNames[4]}]`,
			babeUnis[4],
			'Subject: English',
			"Bachelor's degree",
		],
		description: description('Trương Hoàng Anh', 'English'),
	},
	{
		name: babeNames[5],
		role: 'English teacher at Near Academy',
		image: Babe6,
		school: babeUnis[5],
		subject: 'English',
		experience: 2, // in year
		summary:
			"One way to become a fluent speaker in English is to go abroad and live in a country where people speak English. Isn't that true? But, do you have time to go abroad just to make yourself to speak English?",
		bio: [
			`[${babeNames[5]}]`,
			babeUnis[5],
			'Subject: English',
			"Bachelor's degree",
		],
		description: description('Dương Thị Trang', 'English'),
	},
	{
		name: babeNames[6],
		role: 'English teacher at Near Academy',
		image: Babe7,
		school: babeUnis[6],
		subject: 'English',
		experience: 2, // in year
		summary:
			"I'm the founder of Cloud English and the co-founder of yoli. I've been teaching English for years, and over that time I've discovered powerful language learning methods that make learning English much easier and more effective.",
		bio: [
			`[${babeNames[6]}]`,
			babeUnis[6],
			'Subject: English',
			"Bachelor's degree",
		],
		description: description('Hàn Thị Hải Huyền', 'English'),
	},
	{
		name: babeNames[7],
		role: 'English teacher at Near Academy',
		image: Babe8,
		school: babeUnis[7],
		subject: 'English',
		experience: 2, // in year
		summary:
			'I have a university degree in Spanish and English literature and I’m fluent in French, Spanish, Italian and Portuguese, I have dedicated the past 12 years of my life to teaching English and learning Languages!',
		bio: [
			`[${babeNames[7]}]`,
			babeUnis[7],
			'Subject: English',
			"Bachelor's degree",
		],
		description: description('Đào Thị Hồng Nhung', 'English'),
	},
];

const babeDetail = {
	...englishBabes[1],
	rating: '5/5',
	ratings: 1200,
	students: 2600,
	courses: 2,
	banner: BabeBaner,
};

export { chemistryTeacher, biologyTeacher, englishBabes, babeDetail };
