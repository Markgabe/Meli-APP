import React from 'react';

import {
	Container,
	Row,
	ChallengeSection,
	RankSection,
	RankTitle,
	RankHeader,
	RankSymbolContainer,
	RankSymbol,
	RankListContainer,
	RankListRow,
	RankHeaderSymbol,
} from './styles';

import { Forward30 } from 'styled-icons/material-rounded';
import { LockAlt, LockOpenAlt } from 'styled-icons/boxicons-solid';
import { DirectionsRun } from 'styled-icons/material-rounded';

import Challenge from '../../components/Challenge';

function Challenges() {
	return (
		<Container>
			<ChallengeSection>
				<Row>
					<Challenge icon={Forward30} percentage={100} />
				</Row>
				<Row>
					<Challenge icon={LockOpenAlt} percentage={33} />
					<Challenge icon={LockAlt} percentage={66} />
				</Row>
				<Row>
					<Challenge icon={DirectionsRun} percentage={50} />
				</Row>
			</ChallengeSection>
			<RankSection>
				<RankHeader>
					<RankTitle>Divisão #3</RankTitle>
					<RankHeaderSymbol />
				</RankHeader>
				<RankSymbolContainer>
					<RankSymbol />
				</RankSymbolContainer>
				<RankListContainer>
					<RankListRow></RankListRow>
				</RankListContainer>
			</RankSection>
		</Container>
	);
}

export default Challenges;
