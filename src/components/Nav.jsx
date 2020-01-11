/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from '../utilities/colors';
import styled, { appColors, theme } from '../styles';
import routes from '../routes';

const navItems = {
	khoaHoc: 'Khóa học',
	gioiThieu: 'Giới thiệu',
	giaoVien: 'Giáo viên',
	bangXepHang: 'Bảng xếp hạng',
	baiTap: 'Bài tập',
	thiThu: 'Thi thử',
	taiLieu: 'Tài liệu',
	hoiDap: 'Hỏi đáp',
};

const NavBackground = styled.div`
	background-color: ${transparentize(appColors.primaryLight, 0.5)};
	font-family: ${theme.primaryFont};
`;

const StyledNav = styled.nav`
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;

	ul {
		/* override bootstrap margin-bottom: 1rem; */
		margin-bottom: 0;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: auto;
	}
`;

const NavLink = styled(Link)`
	padding: .6rem 1.5rem;

	li {
		height: 3.3rem;
	}

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

function NavItem({ name, className, route, setSelectedItem, children }) {
	return (
		<li className={className}>
			<NavLink
				to={route}
				// https://stackoverflow.com/a/20249560/9449426
				// normal text becomes bold text when hovered, but bold text is more densed
				// so hovering will make the container width shrinking. Workaround is to define
				// a::after psuedo element to reserve extra space by adding ' |' character
				// after the title tag (which will be passed to ::after's content)
				title={name ? name + '|' : ''}
				onClick={() => setSelectedItem(() => name)}
			>
				<span>{name || children}</span>
			</NavLink>
		</li>
	);
}

NavItem.propTypes = {
	name: PropTypes.string,
	route: PropTypes.string.isRequired,
	setSelectedItem: PropTypes.func.isRequired,
	className: PropTypes.string,
	children: PropTypes.node,
};

NavItem.defaultProps = {
	name: '',
	className: '',
	children: null,
};

const StyledNavItem = styled(NavItem)`
	text-align: center;
	color: ${appColors.greyDark3};
	text-transform: uppercase;

	display: flex;
	justify-content: center;
	align-items: stretch;
	cursor: pointer;
	transition: all 0.15s;

	${(props) => props.highlight && '&,'}
	&:hover {
		background-color: ${appColors.primaryDark};
		color: ${appColors.white};
		font-weight: 600;
	}

	${(props) => {
		if (props.home) {
			return `
				flex: 0;
				background-color: ${appColors.greyDark3};
				padding: 0.5rem 1rem;
				color: ${appColors.white};

				a {
					padding: 0;
				}
			`;
		}
		if (props.primary) {
			return `
				background-color: ${appColors.primary};
				color: ${appColors.white};
				font-weight: 600;
			`;
		}
		return '';
	}}
`;

export default function Nav() {
	const [selectedItem, setSelectedItem] = useState(navItems.khoaHoc);

	return (
		<NavBackground>
			<StyledNav>
				<ul>
					<StyledNavItem
						route={routes.home.path}
						home
						setSelectedItem={setSelectedItem}
					>
						<FontAwesomeIcon icon={faHome} />
					</StyledNavItem>
					<StyledNavItem
						name={navItems.khoaHoc}
						route={routes.courses.path}
						primary
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.gioiThieu}
						route={routes.intro.path}
						highlight={navItems.gioiThieu === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.giaoVien}
						route={routes.teacher.path}
						highlight={navItems.giaoVien === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.bangXepHang}
						route={routes.standing.path}
						highlight={navItems.bangXepHang === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.baiTap}
						route={routes.exercise.path}
						highlight={navItems.baiTap === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.thiThu}
						route={routes.exam.path}
						highlight={navItems.thiThu === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.taiLieu}
						route={routes.document.path}
						highlight={navItems.taiLieu === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<StyledNavItem
						name={navItems.hoiDap}
						route={routes.question.path}
						highlight={navItems.hoiDap === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
				</ul>
			</StyledNav>
		</NavBackground>
	);
}
