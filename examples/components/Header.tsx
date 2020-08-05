import React, { useContext } from 'react';
import { Layout, Space } from 'antd';
import styled, { ThemeContext } from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';

import { Themes } from '../pages/_app';

const StyledHeader = styled(Layout.Header)<{ themes: Themes }>`
	background-color: ${props => props.themes.light.backgroundColor};
	padding: 0;
	display: flex;
`;

const StyledSpace = styled(Space)`
	margin: 0 16px;
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;

const Header = () => {
	const themes = useContext(ThemeContext);
	const handleGoGithub = () => {
		globalThis.open('https://github.com/salgum1114/mapbox-gl-threelayer', '_blank');
	};
	return (
		<StyledHeader themes={themes}>
			<StyledSpace>
				<GithubOutlined onClick={handleGoGithub} style={{ fontSize: 28 }} />
			</StyledSpace>
		</StyledHeader>
	);
};

export default Header;
