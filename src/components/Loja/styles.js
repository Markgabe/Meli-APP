import styled from 'styled-components';

import { Coins } from 'styled-icons/fa-solid';

export const Container = styled.div`
	grid-area: Screen;
	padding: 0 10px;

	overflow-y: scroll !important;
`;

export const MeliContainer = styled.div`
	display: flex;
`;

export const Titulo = styled.div`
	box-sizing: inherit;
	outline: none;
	margin-block-start: 0.83em;
	margin-block-end: 0.83em;
	font-size: 25px;
	font-weight: bold;
`;

export const Item = styled.div`
	display: block;
`;

export const ItemBot = styled.div`
	margin-top: 60px;
	display: block;
`;

export const ListTitle = styled.p`
	font-size: 20px;
	font-weight: bold;
`;

export const ListText = styled.p`
	margin-block-start: 1em;
	margin-block-end: 1em;
	font-size: 500 17px/20px;
`;

export const Button = styled.div`
	background-color: ${(props) => props.theme.storeButton};
	border-width: 2px 2px 4px;
	border-color: #000;
	padding: 12px 16px;
	font-size: 15px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	border-radius: 16px;
	font-weight: bold;
	letter-spacing: 0.8px;
`;

export const MoedaTop = styled(Coins)`
	color: #fff159;
	width: 30px;
	height: 30px;
	margin-top: 10px;
	margin-left: 140px;
	margin-right: 10px;
`;

export const MoedaBot = styled(Coins)`
	color: #fff159;
	width: 20px;
	height: 20px;
	margin-left: 10px;
`;

export const TextMoeda = styled.p`
	display: inline;
	color: ${(props) => props.theme.text};
	font-weight: bold;

	margin-right: auto;
`;

export const TextExp = styled.p`
	display: inline;
	font-size: 15px;
	font-weight: bold;
`;

export const Tabela = styled.table`
	font-size: 13px;
	max-width: 500px;
	border-spacing: 0;
	display: table;
	border-collapse: separate;
`;

export const TabelaBold = styled.td``;
export const TabelaRow = styled.tr``;
export const TabelaText = styled.th``;
