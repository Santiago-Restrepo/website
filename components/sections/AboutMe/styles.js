import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    .aboutMe{
        margin: 0 1.5rem 5rem;
        padding-top: 1.5rem;
        margin-top: 3rem;
    }
    .aboutMe__container{
        max-width: 45rem;
        margin: 0 auto;
        
    }

    @media screen and (min-width: 768px){
        .aboutMe__container{
            display: flex;
            align-items: center;
        }
    }
`