import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .consoleText{
        color: ${colors.white};
    }
    .consoleText__prompt{
        background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`