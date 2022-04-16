import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .socialMedia{
        z-index: 1;
        position: fixed;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        background: transparent;
        border-radius: 1rem;
        transition: all 1s;
    }

    .socialMedia__container{
        display: flex;
        flex-direction: column;
        border-radius: .3rem;
    }
    .socialMedia a, .showButton{
        color: white;
        margin: .5rem;
    }
    
    .socialMedia a{
        /* transform: scale(0); */
        transition: all .5s;
    }

    .showButton{
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0;
        padding: 0  0 .5rem;
        font-size: 2rem;
        background: none;
        border: 1px solid transparent;
        cursor: pointer;
    }
    .closeButton{
        /* color: red; */
    }
    
    .socialMedia a.show{
        transform: scale(1);
        display: inline;
    }
`