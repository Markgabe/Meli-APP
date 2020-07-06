import styled from 'styled-components';

import { Coins } from 'styled-icons/fa-solid';
import { PersonCircle } from 'styled-icons/ionicons-solid';
import { ChevronRight } from 'styled-icons/boxicons-solid';

export const HeadSection = styled.div`
	display: flex;
	height: 100px;
	border-bottom: solid 1px ${(props) => props.theme.button};
	background-color: ${(props) => props.theme.notText};
`;

export const BodySection = styled.div`
	align-items: baseline;
	justify-content: space-between;
	display: block;
	margin: 0;
	padding: 5px;
	font-size: 30px;
	box-sizing: border-box;

	border-bottom: 1px solid ${(props) => props.theme.separator};

	background: ${(props) => props.theme.notText};
	color: ${(props) => props.theme.text};
`;

export const Conquistas = styled.div`
	align-items: stretch;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 20px;
	padding-top: 20px;

	background: ${(props) => props.theme.notText};
	color: ${(props) => props.theme.text};
`;

export const ConquistasIcons = styled.div`
	margin: 10px;

	height: 120px;
	width: 90px;

	display: flex;

	background: ${(props) => props.theme.challengeCore};

	border-radius: 10px;
	box-shadow: 2px 2px ${(props) => props.theme.text};
`;

export const Badge = styled(Coins)`
	width: 70px;
	height: 70px;
	color: #ef4649;
	margin: auto;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 10;
	justify-content: center;
`;

export const Texto = styled.p`
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-bottom: 10px;
	margin: 0 0 10px;
	font-size: 19px;
	font-weight: 700;
`;

export const DescripTexto = styled.div`
	color: #777;
	display: block;
	font-size: 15px;
	font-weight: 500;
	width: 100%;
`;

export const Ola1 = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
`;

export const Greetings1 = styled.p`
	color: ${(props) => props.theme.text};
	font-size: 14px;
	font-weight: 400;
	margin: 0;
`;
export const Greetings2 = styled.p`
	color: ${(props) => props.theme.text};
	margin: 0;
`;

export const Ola2 = styled.div`
	display: flex;
	font-size: 14px bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
`;

export const Seta = styled(ChevronRight)`
	color: ${(props) => props.theme.text};
	width: 20px;
	height: 20px;
	margin: auto 2px;
`;

export const Perfil = styled(PersonCircle)`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	color: #bbb;
	box-sizing: border-box;
	margin: auto 15px;
	border: 3px solid ${(props) => props.theme.challengeDesktopBorder};
`;

export const Container = styled.div`
	color: #333;
	background-color: #ffffff;
	border-bottom: 1px solid ${(props) => props.theme.separator};
	box-sizing: border-box;
	grid-area: Screen;
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
	background-color: #fff159;
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
	color: #665d0a;
	font-weight: bold;
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

export const Lista = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
`;

export const TabelaBold = styled.td``;
export const TabelaRow = styled.tr``;
export const TabelaText = styled.th``;

export const Bar = styled.div`
	margin: 15px 5px 0 0;
	height: 10px;
	background: green;

	border-radius: 4px;
`;
