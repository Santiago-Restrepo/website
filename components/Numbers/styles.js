import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .numbers{
        position: fixed;
        top: -10%;
        bottom: 0;
        overflow-y: hidden;
        right: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
        flex-direction: column;
    }
    .numbers p{
        width: 1ch;
        font-size: 2rem;
        word-wrap: break-word;
        text-align: center;
        color: ${colors.gray};
        font-weight: 300;
        transform: scale(.7) translateY(-50%);
    }
    
    .numbers p:nth-child(2){
        transform: scale(1);
        background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary});
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
    }
    @media screen and (min-width: 1024px){
        .numbers{
            top: -30%;
        }
        .numbers p:nth-child(1), .numbers p:nth-child(3){
            /* transform: scale(.7) translateY(-80%); */
        }
    }
`