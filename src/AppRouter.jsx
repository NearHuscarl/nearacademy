import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFoundPage from './pages/NotFoundPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ExerciseResultPage from './pages/ExerciseResultPage';
import ExercisePage from './pages/ExercisePage';
import ExercisePreviewPage from './pages/ExercisePreviewPage';
import ExerciseQuestionsPage from './pages/ExerciseQuestionsPage';
import ExamPage from './pages/ExamPage';
import TeacherPage from './pages/TeacherPage';
import TeacherDetailPage from './pages/TeacherDetailPage';
import QuestionsPage from './pages/QuestionsPage';
import AnswerPage from './pages/AnswerPage';
import AskPage from './pages/AskPage';
import DocumentsPage from './pages/DocumentsPage';
import DocumentPreviewPage from './pages/DocumentPreviewPage';
import CoursesPage from './pages/CoursesPage';
import CoursePreviewPage from './pages/CoursePreviewPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import ProfilePage from './pages/ProfilePage';
import StandingPage from './pages/StandingPage';
import NotificationPage from './pages/NotificationPage';
import AnnouncementPage from './pages/AnnouncementPage';
import ScrollToTop from './components/ScrollToTop';

const isCourseDetail = (path) => /\/course\/\d+\/?$/.test(path);

const AppRouter = () => {
	const {
		home,
		notification,
		register,
		login,
		forgotPassword,
		changePassword,
		about,
		courses,
		teacher,
		cart,
		checkout,
		profile,
		standing,
		exercise,
		exam,
		document,
		question,
	} = routes;

	return (
		<BrowserRouter basename={`/${process.REPO_NAME}/`}>
			<Route component={ScrollToTop} />
			<Route
				render={({ location }) => {
					const path = location.pathname;
					return !isCourseDetail(path) && <Header />;
				}}
			/>
			<Switch>
				<Route path={home.path} component={CoursesPage} exact />
				<Route
					path={notification.path}
					component={NotificationPage}
					exact
				/>
				<Route
					path={`${notification.path}/001`}
					component={AnnouncementPage}
					exact
				/>
				<Route path={about.path} component={HomePage} exact />
				<Route path={register.path} component={RegisterPage} exact />
				<Route path={login.path} component={LoginPage} exact />
				<Route
					path={forgotPassword.path}
					component={ForgotPasswordPage}
					exact
				/>
				<Route
					path={changePassword.path}
					component={ChangePasswordPage}
					exact
				/>
				<Route path={`${profile.path}/:id`} component={ProfilePage} exact />
				<Route path={courses.path} component={CoursesPage} exact />
				<Route path={standing.path} component={StandingPage} exact />
				<Route
					path='/course/001/preview'
					component={CoursePreviewPage}
					exact
				/>
				<Route path='/course/001' component={CourseDetailPage} exact />
				<Route path={cart.path} component={CartPage} exact />
				<Route path={checkout.path} component={CheckoutPage} exact />
				<Route path={teacher.path} component={TeacherPage} exact />
				<Route
					path={`${teacher.path}/001`}
					component={TeacherDetailPage}
					exact
				/>
				<Route path={exercise.path} component={ExercisePage} exact />
				<Route
					path={`${exercise.path}/:id/preview`}
					component={ExercisePreviewPage}
					exact
				/>
				<Route
					path={`${exercise.path}/:id/questions`}
					component={ExerciseQuestionsPage}
					exact
				/>
				<Route
					path={`${exercise.path}/:id/result`}
					component={ExerciseResultPage}
					exact
				/>
				<Route path={exam.path} component={ExamPage} exact />
				<Route path={question.path} component={QuestionsPage} exact />
				<Route path={`${question.path}/ask`} component={AskPage} exact />
				<Route path={`${question.path}/001`} component={AnswerPage} exact />
				<Route path={document.path} component={DocumentsPage} exact />
				<Route
					path={`${document.path}/001`}
					component={DocumentPreviewPage}
					exact
				/>
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
