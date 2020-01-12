import React from 'react';
import PropTypes from 'prop-types';
import MaterialRadio from '@material-ui/core/Radio';
import MaterialRadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled, { appColors } from '../styles';

export const RadioGroup = styled(MaterialRadioGroup)`
	/* yarn add @material-ui/core */

	/* radio button group */
	.MuiFormGroup-root {
		display: grid;
		justify-content: flex-start;
	}

	/* radio button { */
	.MuiFormControlLabel-root {
		margin-bottom: 0;
	}

	/* radio nipple */
	.MuiRadio-root {
		padding: 0.5rem;
		margin-left: 0.5rem;
	}

	/* radio nipple icon */
	.MuiSvgIcon-root {
		font-size: 1.75rem; /* a bit bigger than normal */
	}

	/* radio button text */
	.MuiFormControlLabel-label {
		font-size: inherit;
		font-family: inherit;
		font-weight: inherit;
		line-height: inherit;
		letter-spacing: inherit;
	}

	/* radio button when checked */
	.MuiRadio-colorPrimary.Mui-checked {
		color: ${appColors.primary};
	}
`;

export default function Radio({ className, value, label }) {
	return (
		<FormControlLabel
			className={className}
			value={value}
			control={<MaterialRadio color='primary' />}
			label={label}
		/>
	);
}

Radio.propTypes = {
	className: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	value: PropTypes.any.isRequired,
	label: PropTypes.string.isRequired,
};

Radio.defaultProps = {
	className: null,
};
