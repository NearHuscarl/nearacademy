import sample from 'lodash/sample';
import users from './users';
import { randomBetweenInt, randomDateFromNow } from '../utilities/random';

const questionSamples = [
	{
		title:
			'Was any stimulant used in wars before WW2 that gave a significant advantage to soldiers?',
		description: `During World War II German soldiers were given a drug called Pervitin, which was a form of methamphetamine and is considered having given them a significant advantage during the war.

		Was any stimulant used in wars before WW2 that gave a significant advantage to soldiers?`,
	},
	{
		title: 'Were certain soldiers considered to be neutral by both sides?',
		description:
			'Does this also apply to anyone else? Like did war photographers have special clothing/insignia to signify they were neutral to the war? Or was it just a shoot on sight policy sort of thing?',
	},
	{
		title:
			'How common was it for Red Cross personnel to fight (in both World Wars)?',
		description:
			'How common was it for Red Cross medical personnel to take part in military action on the battlefields (in both World Wars',
	},
	{
		title: 'Was Switzerland really impossible to invade during WW2?',
		description:
			"There are probably some reasons, but I' searched google for 8 hours and it yielded nothing. Was Switzerland much easier to conquer than imagined",
	},
	{
		title:
			'What did the British Empire mean by “Free Trade” in reference to the colonies?',
		description:
			'What did the politicians and industrialists of the British Empire, after 1800, mean when they spoke about Free Trade? Especially in reference to the British colonies? ',
	},
	{
		title: 'How heavily were the British taxing their American colonies?',
		description:
			'The British levied several taxes on the American Colonists (13), which were at least part of the reason for the American Revolution. Were the British taxing the 13 colonies for more money than was being spent on or in the 13 colonies?',
	},
	{
		title: 'How profitable was India for the British Empire in the 1800s?',
		description:
			'How profitable was India for the British Empire, and what were the most important sources of Indian wealth in the 1800s? (Particularly in the decades leading up to the First Opium War.)',
	},
];
const randomQuestion = () => sample(questionSamples);
const randomDateInMinute = () =>
	randomDateFromNow({
		minuteStart: -59,
		minuteEnd: 0,
	}).toISOString();
const randomDateInDay = () =>
	randomDateFromNow({
		dayStart: -20,
		dayEnd: 0,
	}).toISOString();
const randomVotes = () => randomBetweenInt(0, 200);
const randomViews = () => randomBetweenInt(200, 10000);
const randomAnswers = () => randomBetweenInt(0, 30);
const randomAcceptedAnswer = () => randomBetweenInt(0, 100) >= 50;
const randomUser = () => users[randomBetweenInt(2, 9)];
const getQuestionId = (index) => 'Q' + index.toString().padStart(5, 0);

const createQuestion = ({title, description}) => ({
	id: 'Q000',
	title,
	subject: 'History',
	description,
	tags: ['War', 'Drugs', 'Trade'],
	date: randomDateInMinute(),
	votes: randomVotes(),
	views: randomViews(),
	answers: randomAnswers(),
	acceptedAnswer: randomAcceptedAnswer(),
	user: randomUser(),
});

const questions = {};

for (let i = 0; i < 10; i += 1) {
	const id = getQuestionId(i + 1);
	questions[id] = { ...createQuestion(randomQuestion()), id };
}

const sidebarQuestion = () => ({
	title: 'Should I vaccinate my child if he\'s already autistic?',
	subject: 'BiOlOGy',
	description: 'Plz halp me senpai ヾ(●⌒∇⌒●)ﾉ <丶´Д｀><丶´Д｀><丶´Д｀>',
	tags: ['Vaccinate', 'Autism'],
	date: randomDateInDay(),
	votes: randomVotes(),
	views: randomViews(),
	answers: randomAnswers(),
	acceptedAnswer: randomAcceptedAnswer(),
	user: randomUser(),
});

const hotQuestions = [];
const newQuestions = [];

for (let i = 0; i < 10; i += 1) {
	const id = getQuestionId(i + 1);
	hotQuestions[id] = { ...sidebarQuestion(), id };
	newQuestions[id] = { ...sidebarQuestion(), id };
}

export { questions, hotQuestions, newQuestions };
