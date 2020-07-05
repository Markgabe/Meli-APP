import React from 'react';

import styled from 'styled-components';

import { PersonCircle } from 'styled-icons/ionicons-solid';
import { ChevronRight } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
	color: #333;
	background-color: #ffffff;
	border-bottom: 1px solid ${(props) => props.theme.separator};
	box-sizing: border-box;

	z-index: 5;
`;

export const HeadSection = styled.div`
	display: flex;

	height: 100px;

	border-bottom: solid 1px ${(props) => props.theme.button};

	background-color: ${(props) => props.theme.secondary};
`;

export const BodySection = styled.div`
	position: relative;
	display: block;
	margin: 0;
	padding: 0;
	font-size: 14px;
	box-sizing: border-box;
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

export const Row = styled.div`
	background: ${(props) => props.theme.optionRow};
	display: block;
	padding: 4px 0;
	margin: 0;
	box-sizing: border-box;
	font-size: 14px;
`;

export const Item = styled.div`
	display: block;
	min-height: 39px;
	line-height: 23px;
	text-decoration: none;
	padding: 8px 20px 8px 26px;
	margin: 0;
	outline: 0;
	box-sizing: border-box;
`;

export const Lista = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	justify-content: center;
`;

export const Title = styled.p`
	display: inline;
	margin: auto 25px;

	color: ${(props) => props.theme.text};
	font-family: 'Raleway', sans-serif;
`;
