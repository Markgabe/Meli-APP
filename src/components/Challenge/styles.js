import styled from 'styled-components';

export const Container = styled.div`
	margin: 20px auto;

	display: flex;

	width: 120px;
	height: 120px;

	justify-content: center;
`;

export const Core = styled.div`
	display: flex;

	width: 90px;
	height: 90px;

	border-radius: 50%;

	background-color: ${(props) => props.theme.challengeCore};
`;

export const Icon = styled(({ svg, ...props }) => svg.render(props))`
	margin: auto;

	width: 65px;
	height: 65px;

	color: ${(props) => props.theme.challengeIcon};
`;
