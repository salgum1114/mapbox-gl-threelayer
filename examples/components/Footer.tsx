import React, { useContext } from 'react';
import { Layout } from 'antd';
import styled, { ThemeContext } from 'styled-components';
import { Themes } from '../pages/_app';

const StlyedFooter = styled(Layout.Footer)<{ themes: Themes }>`
	background-color: ${props => props.themes.light.backgroundColor};
`;

const Footer = () => {
	const themes = useContext(ThemeContext);
	return <StlyedFooter themes={themes}></StlyedFooter>;
};

export default Footer;
