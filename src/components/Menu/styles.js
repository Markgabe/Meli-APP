import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: space-evenly;

	grid-area: Menu;

	border-top: 1px solid ${(props) => props.theme.separator};

	background-color: ${(props) => props.theme.secondary};

	overflow-y: hidden;
`;
