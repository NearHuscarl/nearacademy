import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import { H1 } from '../components/Headings';
import { Bold, SizedBox } from '../components/Common';
import Input, { InputGroup } from '../components/Input';
import Button, { ButtonText } from '../components/Buttons';
import styled, { appColors, mixins } from '../styles';
import authImage from '../../public/images/auth.png';

export const Main = styled.main`
	margin-bottom: 7rem;
`;
export const Heading = styled(H1)`
	font-size: 2.4rem;
`;
export const SubHeading = styled.div`
	margin-bottom: 0.5rem;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 43rem;
	margin: 0 auto;

	& > :not(button) {
		width: 100%;
	}

	.submit {
		width: 60%;
		margin: 3rem 0;
		padding: 1rem;
		font-size: 1.5rem;
	}

	.register {
		color: ${appColors.primary};
		font-weight: 600;
		transition: color 0.25s;

		&:hover,
		&:active,
		&:focus {
			color: ${mixins.darken(appColors.primary)};
		}
	}
`;
export const InputHint = styled(Bold)`
	margin: 1rem 0;
	text-align: left;
`;

export default function LoginPage() {
	const history = useHistory();
	return (
		<Main>
			<Breadcrumb path={[routes.home, routes.login]} />
			<Container>
				<img src={authImage} alt='auth' />
				<Heading>Login</Heading>
				<SubHeading>
					To access to all available features from NearAcademy
				</SubHeading>
				<InputHint>Name</InputHint>
				<InputGroup>
					<Input placeholder='Your name' />
				</InputGroup>
				<InputHint>Password</InputHint>
				<InputGroup>
					<Input type='password' placeholder='Your password' />
				</InputGroup>
				<Button
					className='submit'
					type='button'
					onClick={() => history.push(routes.home.path)}
				>
					Login
				</Button>
				<div>
					<span>Don't have an account? </span>
					<ButtonText
						className='register'
						type='button'
						onClick={() => history.push(routes.register.path)}
					>
						Signup
					</ButtonText>
					<span> now</span>
				</div>
				<SizedBox height={0.5} />
				<ButtonText
					type='button'
					onClick={() => history.push(routes.forgotPassword.path)}
				>
					Forgot your password?
				</ButtonText>
			</Container>
		</Main>
	);
}
