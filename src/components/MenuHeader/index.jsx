import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import { PersonCircle } from 'styled-icons/ionicons-solid';
import {
	HomeAlt,
	ShoppingBag,
	Heart,
	PurchaseTag,
	Store,
} from 'styled-icons/boxicons-regular';
import { Bell, Clock } from 'styled-icons/evil';

import MenuIcon from '../MenuIcon';

import {
	Container,
	HeadSection,
	BodySection,
	Perfil,
	Ola1,
	Greetings1,
	Ola2,
	Greetings2,
	Seta,
	Row,
	Lista,
	Item,
	Title,
} from './styles';

function MenuHeader({ themeToggler }) {
	const context = useContext(ThemeContext);

	return (
		<Container>
			<Link to="/mercadojuntos" style={{ textDecoration: 'none' }}>
				<HeadSection>
					<Perfil />

					<Lista>
						<Ola1>
							<Greetings1>Olá Pedro</Greetings1>
						</Ola1>
						<Ola2>
							<Greetings2>Nível 5 - Mercado Juntos</Greetings2>
							<Seta />
						</Ola2>
					</Lista>
				</HeadSection>
			</Link>
			<BodySection>
				<Row>
					<Item>
						<MenuIcon svg={HomeAlt} active={false} />
						<Title>Início</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={Bell} active={false} />
						<Title>Avisos</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={ShoppingBag} active={false} />
						<Title>Compras</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={Heart} active={false} />
						<Title>Favoritos</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={PersonCircle} active={false} />
						<Title>Minha Conta</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={PurchaseTag} active={false} />
						<Title>Ofertas</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={Clock} active={false} />
						<Title>Histórico</Title>
					</Item>
				</Row>
				<Row>
					<Item>
						<MenuIcon svg={Store} active={false} />
						<Title>Vender</Title>
					</Item>
				</Row>
			</BodySection>
		</Container>
	);
}

export default MenuHeader;
