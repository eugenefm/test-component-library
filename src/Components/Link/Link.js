import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

const StyledLink = styled('a')(
	{
		textDecoration: 'none'
	},
	color,
	space,
	typography
);

const Link = (props) => {
	const { children, ...others } = props;
	return (
		<StyledLink color='blue' fontFamily='main' {...others}>
			{children}
		</StyledLink>
	);
};

Link.propTypes = {
	children: PropTypes.node.isRequired
};

export default Link;
