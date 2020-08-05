import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 100%;
	height: 480px;
`;

const MapWrapper: React.FC = props => {
	const { children } = props;
	return <StyledDiv>{children}</StyledDiv>;
};

export default MapWrapper;
