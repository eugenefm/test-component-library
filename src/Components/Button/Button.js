import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant, color, space, typography } from 'styled-system';

const StyledButton = styled('button')(
	{
		textTransform: 'uppercase',
		letterSpacing: '1px'
	},
	variant({
		variants: {
			primary: {
				color: 'white',
				bg: 'blue',
				padding: 2,
				border: 'none'
			},
			secondary: {
				color: 'blue',
				bg: 'white',
				padding: 2,
				border: '1px solid blue'
			}
		}
	}),
	color,
	space,
	typography
);

const Button = (props) => {
	const { children, onClick, variant, ...others } = props;
	return (
		<StyledButton variant={variant} fontSize={0} onClick={onClick} {...others}>
			{children}
		</StyledButton>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	variant: PropTypes.string
};

Button.defaultProps = {
	variant: 'primary'
};

export default Button;
