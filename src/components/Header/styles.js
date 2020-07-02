import React from 'react'

import styled from 'styled-components'

import { Bitcoin } from 'styled-icons/boxicons-logos'
import { Trophy } from 'styled-icons/boxicons-solid'


export const Container = styled.div`
    display: flex;

    align-items: space-between;

    height: 60px;
    background-color: var(--secondary);

    border-bottom: 1px solid grey;
`

export const Coin = styled(Bitcoin)`
    color: var(--coin);
    width: 24px;
    height: 24px;
    margin: auto 2px auto auto;
`

export const Amount = styled.p`
    color: var(--coin);
    margin-right: 10px;

    font-weight: bold;
`

export const Rank = styled(Trophy)`
    color: var(--rank);
    width: 24px;
    height: 24px;

    margin: auto 2px auto auto;
`

export const RankNumber = styled.p`
    color: var(--rank);
    font-weight: bold;
    margin-right: 20px;
`