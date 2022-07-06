import styled, { css } from 'styled-components'
import boxShadowPulse from '../../styles/animations/boxShadowPulse'

export const Container = styled.main`
    padding: 4%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Author = styled.button`
    top: 1%;
    padding: 1%;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    background: none;
    position: absolute;
    border-radius: 10px;
    text-decoration: none;
    transition-duration: 0.1s;
    transition-timing-function: linear;color: ${props => props.theme.primary};

    :hover {
        background-color: ${props => props.theme.secondary};
    }

    span:nth-child(2) {
        color: ${props => props.theme.color};
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.color};
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    margin-top: 2%;
    align-items: center;
    flex-direction: column;
`

interface IInput {
    filled: boolean
}

export const Input = styled.input<IInput>`
    width: 30%;
    border: none;
    padding: 1.5%;
    font-size: 1.2rem;
    border-radius: 10px; 
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.filled ? props.theme.primary : props.theme.secondary};
    background-color: ${props => props.filled ? props.theme.backgroundColor : props.theme.secondary};
    
    ${props => props.filled && css`
        box-shadow: ${props => props.theme.primary} 0px 0px 10px 4px;
        animation: ${props => boxShadowPulse(props.theme.primary)} 1s infinite linear;
    `}
    
    :focus {
        outline: none;
        animation: none;
        box-shadow: none;
        border-color: ${props => props.theme.secondary};
        background-color: ${props => props.theme.secondary};
        box-shadow: ${props => props.theme.secondary} 0px 0px 10px 2px;
    }

    ::placeholder {
        color: ${props => props.theme.color};
    }
`

export const Button = styled.button`
    width: 30%;
    padding: 2%;
    border: none;
    margin-top: 3%;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: ${props => props.theme.primary} 0px 0px 10px 4px;
    animation: ${props => boxShadowPulse(props.theme.primary)} 1s infinite linear;

    :disabled {
        opacity: 0.1;
        animation: none;
        box-shadow: none;
        cursor: not-allowed;
        background-color: ${props => props.theme.secondary};
    }

    :hover:not(:disabled) {
        animation: none;
        box-shadow: none;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.backgroundColor};
    }
`