import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import Standing from '../components/Standing';
import Pagination from '../components/Pagination';
import { SizedBox } from '../components/Common';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import { SearchBar } from '../components/Input';
import ContentContainer from '../layout/ContentContainer';
import { rankProps } from '../utilities/proptypes';
import styled from '../styles';

const Main = styled.main`
	margin-bottom: 7rem;
`;
const Search = styled.div`
	margin: 3rem 0;
	display: flex;
	justify-content: flex-end;
`;

function standingTab(standing) {
	return (
		<>
			<Search>
				<SearchBar placeholder='Tìm kiếm người dùng...' width={28} />
			</Search>
			{standing}
			<SizedBox height={4.5} />
			<Pagination />
		</>
	);
}

const StandingPage = ({ standing, monthlyStanding, weeklyStanding }) => (
	<Main>
		<Breadcrumb path={[routes.home, routes.standing]} />
		<SizedBox height={2.5} />
		<ContentContainer>
			<Tabs>
				<TabList>
					<Tab>Bảng xếp hạng tổng</Tab>
					<Tab>Bảng xếp hạng tháng</Tab>
					<Tab>Bảng xếp hạng tuần</Tab>
				</TabList>
				<TabPanel>{standingTab(<Standing standing={standing} />)}</TabPanel>
				<TabPanel>
					{standingTab(<Standing standing={monthlyStanding} />)}
				</TabPanel>
				<TabPanel>
					{standingTab(<Standing standing={weeklyStanding} />)}
				</TabPanel>
			</Tabs>
		</ContentContainer>
	</Main>
);

StandingPage.propTypes = {
	standing: PropTypes.arrayOf(rankProps).isRequired,
	monthlyStanding: PropTypes.arrayOf(rankProps).isRequired,
	weeklyStanding: PropTypes.arrayOf(rankProps).isRequired,
};

const mapStateToProps = (state) => ({
	standing: state.standings.standing,
	monthlyStanding: state.standings.monthlyStanding,
	weeklyStanding: state.standings.weeklyStanding,
});

export default connect(mapStateToProps)(StandingPage);
