import React from 'react';

import styled from 'styled-components';

import { Bitcoin } from 'styled-icons/boxicons-logos';
import { Trophy } from 'styled-icons/boxicons-solid';
import { Menu as MenuOutline } from 'styled-icons/feather';

import MenuComponent from '../Menu';

import Hamburger from 'react-hamburger-menu';

export const Container = styled.div`
	display: flex;

	align-items: space-between;

	background-color: ${(props) => props.theme.headerBackground};

	border-bottom: 1px solid grey;

	height: 60px;

	transition: all 0.2s;
`;

export const Coin = styled(Bitcoin)`
	color: var(--coin);
	width: 24px;
	height: 24px;
	margin: auto 2px auto auto;
`;

export const Amount = styled.p`
	color: var(--coin);
	margin-right: 10px;

	font-weight: bold;
`;

export const Rank = styled(Trophy)`
	color: var(--rank);
	width: 24px;
	height: 24px;
	margin: auto 2px auto auto;
`;

export const Menu = styled(MenuOutline)`
	color: var(--white);
	width: 30px;
	height: 30px;
	margin: auto 2px auto auto;
`;

export const RankNumber = styled.p`
	color: var(--rank);
	font-weight: bold;
	margin-right: 20px;
`;

export const HamburgerMenu = styled((props) => <Hamburger {...props} />)`
	overflow: hidden;
	margin: auto 10px auto auto;
	padding: 1px 0;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: Header;
	margin: 0;
	padding: 0;

	position: absolute;

	width: 100vw;
`;

export const MenuArea = styled(MenuComponent)`
	overflow-y: hidden !important;
`;
