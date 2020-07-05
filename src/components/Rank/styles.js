import styled from 'styled-components';

import { InfoCircle } from 'styled-icons/boxicons-solid/';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 30%;
	background: ${(props) => props.theme.modal};
	border-radius: 2%;

	@media (max-width: 767px) {
		display: none;
	}
`;

export const Title = styled.p`
	font-weight: bold;
	color: ${(props) => props.theme.text};
	font-size: 1.5rem;
	font-family: 'Ubuntu', sans-serif;

	margin: 0;
`;
export const Header = styled.div`
	display: flex;
	padding: 2px 15px;
`;
export const SymbolContainer = styled.div`
	display: flex;
`;
export const Symbol = styled.div``;
export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ListRow = styled.div``;
export const HeaderSymbol = styled(InfoCircle)`
	width: 20px;
	height: 20px;

	align-self: flex-end;
	margin: 0 0 2px 5px;

	color: ${(props) => props.theme.button};
`;
