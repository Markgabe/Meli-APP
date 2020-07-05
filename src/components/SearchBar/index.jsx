import React from 'react';

import { Container, Bar, Input, SearchIcon } from './styles';

const SearchBar = () => {
	return (
		<Container>
			<Bar>
				<SearchIcon />
				<Input
					type="text"
					name="Busca"
					id="Busca"
					placeholder="Estou Buscando..."
				/>
			</Bar>
		</Container>
	);
};

export default SearchBar;
