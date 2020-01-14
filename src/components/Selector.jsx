import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styled, { appColors } from '../styles';

const height = '3.3rem';
const customStyles = {
	control: (props) => ({
		...props,
		height,
		minHeight: height,
		maxHeight: height,
	}),
	indicatorsContainer: (props) => ({
		...props,
		height,
		minHeight: height,
		maxHeight: height,
	}),
	dropdownIndicator: (props) => ({
		...props,
		padding: '.4rem',
	}),
	valueContainer: () => ({
		padding: '0 1rem',
	}),
};

const StyledSelector = styled(Select)`
	/* override react-select */
	[class*='singleValue'] {
		color: ${appColors.greyDark2};
	}

	width: ${(props) => props.width || 'auto'}rem;
`;

export default function Selector({
	className,
	placeholder,
	value,
	onChange,
	options,
	width,
}) {
	return (
		<StyledSelector
			width={width}
			styles={customStyles}
			className={className}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			options={options}
		/>
	);
}

Selector.propTypes = {
	className: PropTypes.string,
	width: PropTypes.number,
	placeholder: PropTypes.node,
	// eslint-disable-next-line react/forbid-prop-types
	value: PropTypes.any.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Selector.defaultProps = {
	className: null,
	width: null,
	placeholder: '',
};
