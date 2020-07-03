import styled from 'styled-components'


export const Container = styled.div`
    margin: 20px auto;

    display: flex;

    width: 105px;
    height: 105px;

    border: 7px solid var(--lowchallenge);
    border-radius: 50%;
`

export const Core = styled.div`
    display: flex;

    width: 90px;
    height: 90px;

    margin: auto;

    border-radius: 50%;

    background-color: var(--lowchallenge);
`

export const Icon = styled(({ svg, ...props }) => svg.render(props))`
    margin: auto;

    width: 65px;
    height: 65px;

    color: ${props => props.theme.primary};
`