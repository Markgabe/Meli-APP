import styled from 'styled-components';

import { InfoCircle } from 'styled-icons/boxicons-solid/';

export const Container = styled.div`
	display: flex;
	grid-area: Screen;

	background: ${(props) => props.theme.primary};

	justify-content: center;
	padding: 10px 10px;

	@media (min-width: 768px) {
		justify-content: space-between;
		padding: 30px 150px;
	}

	overflow-y: scroll;
`;

export const ChallengeSection = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 500px;

	border-radius: 6px;
	background: transparent;
	width: 70%;

	@media (min-width: 768px) {
		background: ${(props) => props.theme.modal};
		width: 50%;
	}
`;

export const RankSection = styled.div`
	display: flex;
	flex-direction: column;

	width: 30%;
	background: ${(props) => props.theme.modal};
	border-radius: 2%;

	@media (max-width: 767px) {
		display: none;
	}
`;

export const Row = styled.div`
	display: flex;

	justify-content: space-evenly;

	overflow: hidden;

	width: 100%;
`;

export const RankTitle = styled.p`
	font-weight: bold;
	color: ${(props) => props.theme.text};
	font-size: 1.5rem;
	font-family: 'Ubuntu', sans-serif;

	margin: 0;
`;
export const RankHeader = styled.div`
	display: flex;
	padding: 2px 15px;
`;
export const RankSymbolContainer = styled.div`
	display: flex;
`;
export const RankSymbol = styled.div``;
export const RankListContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const RankListRow = styled.div``;
export const RankHeaderSymbol = styled(InfoCircle)`
	width: 20px;
	height: 20px;

	align-self: flex-end;
	margin: 0 0 2px 5px;

	color: ${(props) => props.theme.toolTip};
`;
