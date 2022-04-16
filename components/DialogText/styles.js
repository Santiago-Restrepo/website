import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .dialogText{
        padding: 1rem 1.2rem;
        font-size: 1.1rem;
        width: 90%;
        max-width: 25rem;
        margin: -1rem auto 0;
        background-color: #35353579;
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px);
        border-radius: 1rem;
    }
    @media screen and (min-width: 768px){
        .dialogText{
            margin: 0 0 0 -1rem;
            width: 100%;
            height: 80%;
            font-size: 1rem;
        }
    }
`