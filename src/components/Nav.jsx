/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { appColors, theme } from '../styles';
import routes from '../routes';

const navItems = {
	home: 'Home',
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
	background-color: ${appColors.greyDark3};
	font-family: ${theme.primaryFont};
`;
const StyledNav = styled.nav`
	font-family: ${theme.primaryFont};
	max-width: ${theme.pageContainerWidth};
	margin: 0 auto;

	ul {
		background-color: ${appColors.greyDark3};
		/* override bootstrap margin-bottom: 1rem; */
		margin-bottom: 0;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: auto;
	}
`;

const NavLink = styled(Link)`
	padding: 0.6rem 1.5rem;

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
	transition: all 0.15s;

	${(props) => props.highlight && '&,'}
	&:hover {
		background-color: ${appColors.primary};
		border-left: solid 1px ${appColors.primary};
		color: ${appColors.white};
	}

	${(props) => {
		if (props.home) {
			return `
				flex: 0;
				padding: 0.5rem 1rem;
				a {
					padding: 0;
				}
			`;
		}
		return '';
	}}
`;

function NavItem({
	home,
	highlight,
	name,
	className,
	route,
	setSelectedItem,
	children,
}) {
	return (
		<NavItemContainer highlight={highlight} home={home} className={className}>
			<NavLink
				to={route}
				onClick={() => setSelectedItem(() => name || navItems.home)}
			>
				<span>{name || children}</span>
			</NavLink>
		</NavItemContainer>
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

export default function Nav() {
	const [selectedItem, setSelectedItem] = useState(navItems.khoaHoc);

	return (
		<NavBackground>
			<StyledNav>
				<ul>
					<NavItem
						route={routes.home.path}
						home
						highlight={navItems.home === selectedItem}
						setSelectedItem={setSelectedItem}
					>
						<FontAwesomeIcon icon={faHome} />
					</NavItem>
					<NavItem
						name={navItems.khoaHoc}
						route={routes.courses.path}
						primary
						highlight={navItems.khoaHoc === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.gioiThieu}
						route={routes.intro.path}
						highlight={navItems.gioiThieu === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.giaoVien}
						route={routes.teacher.path}
						highlight={navItems.giaoVien === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.bangXepHang}
						route={routes.standing.path}
						highlight={navItems.bangXepHang === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.baiTap}
						route={routes.exercise.path}
						highlight={navItems.baiTap === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.thiThu}
						route={routes.exam.path}
						highlight={navItems.thiThu === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
						name={navItems.taiLieu}
						route={routes.document.path}
						highlight={navItems.taiLieu === selectedItem}
						setSelectedItem={setSelectedItem}
					/>
					<NavItem
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
