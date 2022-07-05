import { keyframes } from 'styled-components'

const boxShadowPulse = (color: string) => keyframes`
    50% {
        box-shadow: ${color} 0px 0px 10px 7px;
    }

    100% {
        box-shadow: ${color} 0px 0px 10px 4px;
    }
`

export default boxShadowPulse