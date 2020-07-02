import styled from 'styled-components'

import HeaderComponent from '../../components/Header'
import ChallengesScreen from '../Challenges'
import MenuComponent from '../../components/Menu'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
`

export const Menu = styled(MenuComponent)`
`

export const Header = styled(HeaderComponent)`
`

export const Challenge = styled(ChallengesScreen)`
`