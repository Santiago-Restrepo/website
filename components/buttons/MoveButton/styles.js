import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    .moveButton{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: .3rem 1rem;
        margin-left: 1.5rem;
        text-decoration: none;
        font-weight: 500;
        border: 2px solid ${colors.white};
        border-radius: .5rem;
        color: ${colors.white};
    }
    .moveButton.up{
        margin: 1.5rem auto;
    }
`