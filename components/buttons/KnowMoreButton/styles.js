import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    .knowMoreButton{
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin: 0 auto;
        padding: .5rem 1rem;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        border: none;
        border-radius: .5rem;
        color: ${colors.white};
        background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
    }
    .knowMoreButton.floating{
        position: absolute;
        bottom: -1rem;
        right: -.5rem;

    }
    .knowMoreButton .knowMoreButton__content{
        margin-right: .5rem;
    }
`