

import styled from 'styled-components'


import close from '../../Assets/images/lixeira.png'
import { colors } from '../../styles'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000 ;
    opacity: 0.7;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Sidebar = styled.aside`
    z-index: 1;
    background-color: ${colors.rose};
    max-width: 360px;
    width: 100%;
    padding: 40px 16px 0 16px;
`

export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 24px;
    margin-top: 16px;
    margin-top: 40px;
`
export const CartItem = styled.li`
    display: flex;
    gap: 16px;
    border-bottom: 1px solid ${colors.white};
    padding: 8px;
    position: relative;
    background-color: ${colors.beige};
    margin: 8px 0;

    img {
        height: 80px;
        width: 80px;
        object-fit: cover;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    span {
        display: block;
        font-size: 14px;
    }

    button{
        background-image: url(${close});
        width: 16px;
        height: 16px;
        border: none;
        cursor: pointer;
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 4px;
    border: none;
    background-color: ${colors.beige};
    color: ${colors.rose};
    font-weight: bold;  
    font-size: 14px;
    cursor: pointer;
`