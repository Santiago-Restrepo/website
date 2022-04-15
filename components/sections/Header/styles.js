import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    header{
        display: flex;
        justify-content: space-between;
        color: ${colors.white};
    }

    header span{
        font-size: 1rem;
    }
`