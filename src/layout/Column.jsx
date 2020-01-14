import styled from '../styles';

export const ColumnContainer = styled.div`
	display: flex;
	margin: 2.5rem 0;
`;

export const Column = styled.div`
	&:not(:last-child) {
		margin-right: 2.75rem;
	}

	width: ${(props) => props.width || '100%'};
    /* flex: ${(props) => props.value || 0} 0 auto; */
`;