import { React } from 'react';

import styled from 'styled-components';

export const ResultIcon = styled(({ svg, ...props }) => svg.render(props))`
	color: ${(props) => props.theme.smallIcon};

	width: 30px;
	height: 30px;
	margin: 0px;
`;
