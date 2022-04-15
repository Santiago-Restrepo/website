import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .window{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        color: ${colors.white};
    }

    .window__tab{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        background-color: ${colors.black};
        border-radius: .5rem .5rem 0 0;
    }
    .window__tab span{
        font-size: .8rem;
        font-weight: 600;
    }

    .window__tab-buttons{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: .3rem;
        position: absolute;
        right: 0.5rem;
    }

    .window__tab-buttons .tabButton{
        width: .7rem;
        height: .7rem;
        border-radius: 100%;
        opacity: .9;
    }
    .tabButton:nth-child(1){
        background-color: ${colors.green};
    }
    .tabButton:nth-child(2){
        background-color: ${colors.yellow};
    }
    .tabButton:nth-child(3){
        background-color: ${colors.red};
    }

    .window__content{
        background-color: #19191a79;
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px); 
        font-size: 1rem;
        padding: 0 1rem;

    }
`