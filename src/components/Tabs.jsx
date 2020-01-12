import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import styled, { appColors } from '../styles';

const Tabs = styled(ReactTabs)`
	/* yarn add react-tabs */
	.react-tabs__tab-list {
		color: inherit;
		font-family: inherit;
		border-bottom: solid 0.1rem ${appColors.greyLight2};
	}

	.react-tabs__tab {
		font-weight: 600;
		border: none;

		&--selected {
			color: ${appColors.primary};
			border-bottom: solid 0.2rem ${appColors.primary};
		}
	}
`;

export { Tab, Tabs, TabList, TabPanel };
