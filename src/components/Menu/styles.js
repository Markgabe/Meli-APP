import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	grid-area: Menu;

	border-top: 1px solid grey;

	background-color: ${(props) => props.theme.secondary};
`;

export const Separator = styled.div`
	margin: auto 0 0 0;
`;
