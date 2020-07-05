import styled from 'styled-components';

import { Search } from 'styled-icons/evil';

export const Container = styled.div`
	display: flex;

	@media (min-width: 768px) {
		width: 80%;
	}
`;

export const Bar = styled.div`
	display: flex;
	width: 100%;
	background-color: ${(props) => props.theme.searchBar};
	margin: auto 0;

	border-radius: 7px;
`;

export const Input = styled.input`
	border: none;
	background: transparent;

	width: 100%;

	height: 30px;
	margin: auto 0;

	&::placeholder {
		color: ${(props) => props.theme.text};
	}
`;

export const SearchIcon = styled(Search)`
	color: ${(props) => props.theme.text};
	width: 30px;
	height: 30px;
	margin: auto 2px;
`;
