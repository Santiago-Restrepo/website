import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .currentProject{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 30rem;
        margin: 2rem auto 0;

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
        background-position: top;
        background-size: cover;
        width: 100%;
        height: 100%;
        border-radius: 0 0 .5rem .5rem;
    }
    .currentProject__content{
        position: relative;
        margin: 1.5rem;
        padding: 1.5rem;
        background-color: #252525e1;
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px);
        border-radius: 1rem;
        color: ${colors.white};
    }

    .currentProject__title{
        display: inline;
        background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .seeMoreButton{
        position: absolute;
        bottom: -1rem;
        left: -.5rem;
        width: fit-content;
        padding: .4rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        background-color: ${colors.primary}22;
        border-radius: .3rem;
        border: 2px solid ${colors.primary};
        color: ${colors.primary};
    }
    .currentProject__content .knowMoreButton{
        bottom: -1rem;
    }

    @media screen and (min-width: 1024px){
        .currentProject{
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 40rem;
            
        }
        .currentProject__images{
            width: 120%;
        }
        .currentProject__content{
            width: 100%;
        }
    }
    @media screen and (min-width: 1444px){
        .currentProject{
            max-width: 55rem;   
        }
    }

`