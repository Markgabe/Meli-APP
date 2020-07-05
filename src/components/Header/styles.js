import React from 'react';

import styled from 'styled-components';

import { Bitcoin } from 'styled-icons/boxicons-logos';
import { Trophy } from 'styled-icons/boxicons-solid';
import { Menu as MenuOutline } from 'styled-icons/feather';

export const Container = styled.div`
	display: flex;

	align-items: space-between;

	background-color: ${(props) => props.theme.headerBackground};

	border-bottom: 1px solid grey;

	grid-area: Header;

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
