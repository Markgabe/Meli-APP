import React from 'react';

import {
	Container,
	Titulo,
	ListText,
	ListTitle,
	Button,
	MoedaTop,
	MoedaBot,
	TextMoeda,
	Item,
	ItemBot,
	TextExp,
	Tabela,
	TabelaBold,
	TabelaText,
	TabelaRow,
	MeliContainer,
} from './styles';

function Loja({ themeToggler }) {
	return (
		<Container>
			<MeliContainer>
				<MoedaTop />
				<TextMoeda>1600 MeLiCoins</TextMoeda>
			</MeliContainer>
			<Titulo>Vantagens com MeLiCoins</Titulo>
			<Item>
				<ListTitle>50 embalagens do MeLi</ListTitle>
				<ListText>
					Ao comprar este item, o vendedor recebe 50 embalagens do
					Mercado Livre para poder enviar suas vendas.
				</ListText>
				<Button>Comprar com MeliCoins</Button>
			</Item>
			<Item>
				<ListTitle>Placa Mercado Juntos</ListTitle>
				<ListText>
					Esta é uma forma de reconhecimento que o Mercado Livre tem
					com nossos colaboradores.
				</ListText>
				<Button>Desbloqueio no nível 7</Button>
			</Item>
			<ItemBot>
				<TextExp>O que é MeLiCoin?</TextExp>
				<MoedaBot />
				<ListText>
					O MeLiCoin é a moeda virtual do Mercado Livre. Quanto mais
					você usar o Mercado Livre, mais MeLiCoins você irá receber e
					assim poderá fazer compras na nossa loja!
				</ListText>
			</ItemBot>

			<Tabela>
				<TabelaRow>
					<TabelaBold>Passa de nível</TabelaBold>
					<TabelaText>Você ganha 100 MeLiCoins</TabelaText>
				</TabelaRow>
				<TabelaRow>
					<TabelaBold>Termina unidade</TabelaBold>
					<TabelaText>
						Você recebe 200 MeLiCoins ao concluir uma unidade
					</TabelaText>
				</TabelaRow>
				<TabelaRow>
					<TabelaBold>Por Vendas</TabelaBold>
					<TabelaText>
						1,6% do valor da venda como cashback em MeLiCoins
					</TabelaText>
				</TabelaRow>
			</Tabela>
		</Container>
	);
}

export default Loja;
