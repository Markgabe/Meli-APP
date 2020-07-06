import { React } from 'react';

import styled from 'styled-components';

export const ResultIcon = styled(({ svg, ...props }) => svg.render(props))`
	color: ${(props) =>
		props.active ? props.theme.menuButton : 'var(--button)'};
	width: 60px;
	height: 60px;
	margin: 10px auto;

	transition: all 0.3s;

	&:hover {
		color: ${(props) => props.theme.menuButton};
		transform: scale(1.05);
	}
`;
