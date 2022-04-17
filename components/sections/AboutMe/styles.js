import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    .aboutMe{
        margin: 0 1.5rem 5rem;
        padding-top: 1.5rem;
        margin-top: 3rem;
    }
    .aboutMe__container{
        max-width: 30rem;
        margin: 0 auto;
        
    }
    .aboutMe__image{
        position: relative;
    }
    .cvLink{
        z-index: 1;
        font-size: 2.5rem;
        position: absolute;
        bottom: -2rem;
        left: -1rem;
        color: ${colors.white};
        opacity: .8;
    }
    .cvLink:hover{
        opacity: .5;
    }

    @media screen and (min-width: 768px){
        .aboutMe__container{
            display: flex;
            align-items: center;
            max-width: 45rem;
        }
    }
`