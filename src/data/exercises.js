import sample from 'lodash/sample';
import chemistry1 from '../../public/images/chemistry-1.jpg';
import chemistry2 from '../../public/images/chemistry-2.jpg';
import exam1 from '../../public/images/exam-preview-01.png';
import exam2 from '../../public/images/exam-preview-02.png';
import examChemistry1 from '../../public/images/exam-chemistry-1.jpg';
import examChemistry2 from '../../public/images/exam-chemistry-2.jpg';
import questions from './exerciseQuestions';
import { maleNames } from './names';
import { randomBetweenInt } from '../utilities/random';
import year from './year';

const titles = [
	'Structure and bonding',
	'Resonance and acid-base chemistry',
	'Alkanes, cycloalkanes, and functional groups',
	'Stereochemistry',
	'Substitution and elimination reactions',
	'Alkenes and alkynes',
	'Alcohols, ethers, epoxides, sulfides',
	'Conjugated systems and pericyclic reactions',
	'Aromatic compounds',
	'Aldehydes and ketones',
	'Carboxylic acids and derivatives',
	'Alpha carbon chemistry',
];
const randomTitle = () => sample(titles);
const randomMaleName = () => sample(maleNames);

const randomViews = () => randomBetweenInt(0, 50000);
const randomAttempts = () => randomBetweenInt(0, 10000);
const getId = (index) => 'E' + index.toString().padStart(5, 0);
let imageGeneration = 0;
const getChemistryImage = () =>
	// eslint-disable-next-line no-plusplus
	imageGeneration++ % 2 ? chemistry1 : chemistry2;

const chemistryExercise = () => ({
	id: 'EC00001',
	title: randomTitle(),
	image: getChemistryImage(),
	subject: 'Chemistry',
	questionCount: 30,
	difficulty: 'Beginner',
	teacher: randomMaleName(),
	description:
		'This exercise consists of 30 multiple-choice questions. All the answers and detail instructions to solve is at the end of the exercise',
	publish: '31/10/2019',
	views: randomViews(),
	attempts: randomAttempts(),
	tags: ['Chemistry exercises', 'Chemistry national exam prep'],
	questions,
});

const chemistryExercises = [];

for (let i = 0; i < 10; i += 1) {
	chemistryExercises.push({ ...chemistryExercise(), id: getId(i + 1) });
}

export { chemistryExercises };

// eslint-disable-next-line no-plusplus
const getNationalImage = () => (imageGeneration++ % 2 ? exam1 : exam2);
// eslint-disable-next-line no-plusplus
const getChemistryExamImage = () =>
	imageGeneration++ % 2 ? examChemistry1 : examChemistry2;

const geographyExam = () => ({
	id: 'EN00001',
	title: `Complete course to master Geology national exams ${year}`,
	image: getNationalImage(),
	subject: 'Geology',
	questionCount: 30,
	difficulty: 'Beginner',
	description: 'Joe mama',
	teacher: 'Mr Bean',
	publish: '31/10/2019',
	views: randomViews(),
	attempts: randomAttempts(),
	tags: ['Geology sample national exams', 'Geology national exam prep'],
	questions,
});
const chemistryExam = () => ({
	id: 'EN00001',
	title: `Sample national exams Chemistry ${year} (Part ${randomBetweenInt(
		1,
		4,
	)})`,
	image: getChemistryExamImage(),
	subject: 'Chemistry',
	questionCount: 30,
	difficulty: 'Beginner',
	description:
		'This exercise consists of 30 multiple-choice questions. All the answers and detail instructions to solve is at the end of the exercise',
	teacher: randomMaleName(),
	publish: '31/10/2019',
	views: randomViews(),
	attempts: randomAttempts(),
	tags: ['Chemistry sample national exams', 'Chemistry national exam prep'],
	questions,
});

const exams = {};
exams.geography = [];
exams.chemistry = [];

for (let i = 10; i < 20; i += 1) {
	exams.geography.push({ ...geographyExam(), id: getId(i + 1) });
}
for (let i = 20; i < 30; i += 1) {
	exams.chemistry.push({ ...chemistryExam(), id: getId(i + 1) });
}

export default exams;
