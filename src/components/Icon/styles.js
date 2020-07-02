import { React } from 'react'

import styled from 'styled-components'


export const ResultIcon = styled(({ svg, ...props }) => svg.render(props))`
    color: ${props => props.active ? "var(--hoverbutton)": "var(--button)"};
    width: 60px;
    height: 60px;
    margin: 10px auto;

    transition: all 0.3s;

    &:hover {
        color: var(--hoverbutton);
        transform: scale(1.05);
    }
`