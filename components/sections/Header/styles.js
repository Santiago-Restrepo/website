import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    header{
        color: ${colors.white};
        display: flex;
        justify-content: space-between;
    }

    header span{
        border: 2px solid ${colors.white};
        border-radius: .5rem;
        padding: .3rem;
        font-size: 1rem;
    }
`