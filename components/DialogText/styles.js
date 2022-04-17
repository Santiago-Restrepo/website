import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .dialogText{
        padding: 1rem 1.2rem;
        font-size: 1.1rem;
        width: 90%;
        max-width: 20rem;
        max-height: 30rem;
        margin: -1rem auto 0;
        background-color: ${colors.background};
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px);
        border-radius: 1rem;
    }
    .dialogText__container{
        max-height: 15rem;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .dialogText__container::-webkit-scrollbar{
        width: .3rem;
    }
    // background-color: $Color-blanco

    .dialogText__container::-webkit-scrollbar-track {
        background-color: ${colors.darkGray}33;
        border-radius: 20px;
    }
    
    .dialogText__container::-webkit-scrollbar-thumb {
        background-color: ${colors.gray};
        border-radius: 20px;
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