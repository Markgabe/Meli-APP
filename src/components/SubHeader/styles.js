import React from 'react';

import styled from 'styled-components';

import { Location } from 'styled-icons/evil';
import { ChevronRight } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
	display: flex;

	background-color: ${(props) => props.theme.headerBackground};

	border-bottom: 1px solid ${(props) => props.theme.separator};

	grid-area: SubHeader;

	transition: all 0.2s;
`;

export const Local = styled(Location)`
	color: var(--white);
	width: 20px;
	height: 20px;
	margin: auto 2px;
`;

export const Texto = styled.p`
	color: var(--white);
	margin-right: 20px;

	font-family: 'Raleway', sans-serif;
	font-size: 0.7em;

	padding-top: 7px;
`;

export const Seta = styled(ChevronRight)`
	color: var(--white);
	width: 20px;
	height: 20px;
	margin: auto 2px auto auto;
`;
