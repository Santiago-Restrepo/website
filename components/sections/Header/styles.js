import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    header{
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding: 1rem 1.5rem;
        background-color: ${colors.black};
        color: ${colors.white};
        display: flex;
        justify-content: space-between;
    }

    header span{
        border: 2px solid ${colors.white};
        border-radius: .5rem;
        padding: .3rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
    }
`