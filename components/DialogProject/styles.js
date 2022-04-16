import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .currentProject{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .currentProject__images{
        position: relative;
        display: flex;
        justify-content: center;
        padding: 0 1.5rem;
        margin: 0 auto;
        max-width: 35rem;
        width: 90%;
        height: 20rem;
    }
    .currentProject__image{
        object-fit: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        border-radius: 0 0 .5rem .5rem;
    }
`