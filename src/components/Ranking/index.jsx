import React from 'react';

import {
	Container,
	HeadSection,
	Perfil,
	Ola1,
	Ola2,
	Lista,
	Greetings1,
	Greetings2,
	Seta,
	BodySection,
	Conquistas,
	ConquistasIcons,
	Badge,
	Description,
	Texto,
	DescripTexto,
	Bar,
} from './styles';

function Loja({ themeToggler }) {
	return (
		<Container>
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
			<BodySection>Conquistas</BodySection>
			<Conquistas>
				<ConquistasIcons>
					<Badge />
				</ConquistasIcons>
				<Description>
					<Texto>Desafio dos 30 dias</Texto>
					<DescripTexto>
						Você completou o desafio dos 30 dias
					</DescripTexto>
					<Bar />
				</Description>
			</Conquistas>
			<Conquistas>
				<ConquistasIcons>
					<Badge />
				</ConquistasIcons>
				<Description>
					<Texto>Desafio dos 60 dias</Texto>
					<DescripTexto>
						Você completou o desafio dos 60 dias
					</DescripTexto>
					<Bar />
				</Description>
			</Conquistas>
			<Conquistas>
				<ConquistasIcons>
					<Badge />
				</ConquistasIcons>
				<Description>
					<Texto>Desafio das 100 vendas</Texto>
					<DescripTexto>
						Você completou o desafio das 100 vendas
					</DescripTexto>
					<Bar />
				</Description>
			</Conquistas>
			<Conquistas>
				<ConquistasIcons>
					<Badge />
				</ConquistasIcons>
				<Description>
					<Texto>Desafio das 200 vendas</Texto>
					<DescripTexto>
						Você completou o desafio das 200 vendas
					</DescripTexto>
					<Bar />
				</Description>
			</Conquistas>
		</Container>
	);
}

export default Loja;
