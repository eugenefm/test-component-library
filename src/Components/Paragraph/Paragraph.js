import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

const StyledParagraph = styled('p')(
	{
		textDecoration: 'none',
		lineHeight: '1.5'
	},
	variant({
		variants: {
			light: {
				color: 'white'
			},
			dark: {
				color: 'black'
			}
		}
	}),
	color,
	space,
	typography
);

const Paragraph = (props) => {
	const { children } = props;
	return (
		<StyledParagraph fontFamily='main' pt={1} pb={1} fontSize={2} {...props}>
			{children}
		</StyledParagraph>
	);
};

Paragraph.propTypes = {
	variant: PropTypes.oneOf(['light', 'dark']),
	children: PropTypes.node.isRequired
};

Paragraph.defaultProps = {
	variant: 'dark'
};

export default Paragraph;
