import React from 'react'

import styled from 'styled-components'


export const ResultLogo = styled(({ svg, ...props }) => React.createElement('img', {src: svg, ...props}, null))`
    width: 48px;
    height: 48px;
    margin: auto 10px;
`