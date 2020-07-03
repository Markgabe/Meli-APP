import React from 'react'

import styled from 'styled-components'

import { Bitcoin } from 'styled-icons/boxicons-logos'
import { Trophy } from 'styled-icons/boxicons-solid'


export const Container = styled.div`
    display: flex;
    width: 100vw;
    position: fixed;

    align-items: space-between;

    height: 60px;
    background-color: ${props => props.theme.secondary};

    border-bottom: 1px solid grey;

    transition: all 0.2s;
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

export const SwitchContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`