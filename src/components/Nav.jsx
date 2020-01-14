/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { appColors, theme, mixins } from '../styles';
import routes from '../routes';

const navItems = {
	courses: 'Courses',
	teachers: 'Teachers',
	standing: 'Standing',
	exercises: 'Exercises',
	exams: 'Exams',
	documents: 'Documents',
	forum: 'Forum',
	about: 'About',
};

const NavBackground = styled.div`
	background-image: linear-gradient(
		to right,
		${appColors.greyDark2},
		${appColors.greyDark3}
	);
	font-family: ${theme.primaryFont};
`;
const NavBar = styled.nav`
	font-family: ${theme.primaryFont};
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;

	ul {
		/* override bootstrap margin-bottom: 1rem; */
		margin-bottom: 0;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
`;

const NavLink = styled(Link)`
	padding: 1rem 1.5rem;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	&::after {
		display: block;
		content: attr(title);
		font-weight: 600;
		height: 0;
		overflow: hidden;
		visibility: hidden;
		text-transform: uppercase;
	}

	&:link,
	&:visited {
		color: inherit;
		font-weight: inherit;
	}
`;

const NavItemContainer = styled.li`
	text-align: center;
	color: ${appColors.white};
	text-transform: uppercase;
	font-weight: 600;
	border-left: solid 1px ${appColors.greyDark2};

	display: flex;
	justify-content: center;
	align-items: stretch;
	cursor: pointer;

	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: all 0.15s;
		background-image: linear-gradient(
			to bottom right,
			${appColors.primary},
			${mixins.darken(appColors.primary)}
		);
	}
	a {
		z-index: 1;
	}

	${(props) => props.highlight && '&,'}
	&:hover {
		opacity: 1;
		border-left: solid 1px ${appColors.primary};
		color: ${appColors.white};

		&::before {
			opacity: 1;
		}
	}
`;

function NavItem({ highlight, name, className, route, setSelectedItem }) {
	return (
		<NavItemContainer highlight={highlight} className={className}>
			<NavLink to={route} onClick={() => setSelectedItem(() => name)}>
				<span>{name}</span>
			</NavLink>
		</NavItemContainer>
	);
}

NavItem.propTypes = {
	name: PropTypes.string.isRequired,
	highlight: PropTypes.bool.isRequired,
	route: PropTypes.string.isRequired,
	setSelectedItem: PropTypes.func.isRequired,
	className: PropTypes.string,
};

NavItem.defaultProps = {
	className: null,
};

export default function Nav() {
	const [selectedItem, setSelectedItem] = useState(navItems.courses);

	return (
		<NavBackground>
			<NavBar>
				<ul>
					<NavItem
						name={navItems.courses}
						route={routes.courses.path}
						primary
						highlight={navItems.courses === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.teachers}
						route={routes.teacher.path}
						highlight={navItems.teachers === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.standing}
						route={routes.standing.path}
						highlight={navItems.standing === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.exercises}
						route={routes.exercise.path}
						highlight={navItems.exercises === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.exams}
						route={routes.exam.path}
						highlight={navItems.exams === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.documents}
						route={routes.document.path}
						highlight={navItems.documents === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.forum}
						route={routes.question.path}
						highlight={navItems.forum === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.about}
						route={routes.about.path}
						highlight={navItems.about === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
				</ul>
			</NavBar>
		</NavBackground>
	);
}
