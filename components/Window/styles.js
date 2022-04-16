import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .window{
        display: flex;
        flex-direction: column;
        margin: 1rem 1.5rem 1rem;
        color: ${colors.white};
    }

    .window.desktopSize, .window.mobileSize{
        position: absolute;
        
    }
    .window.desktopSize .window__tab, .window.mobileSize .window__tab{
        padding: .7rem 0;
    }
    .window.desktopSize{
        top: 10%;
        left: 0;
        width: 90%;
        max-width: 25rem;
        height: 70%;
        max-height: 15rem;
        transform: perspective(600px) rotateY(25deg) rotateX(12deg);
        box-shadow: -5px 5px 10px ${colors.black};
        border-radius: 0 0 .5rem .5rem;
    }
    .window.desktopSize .window__tab-buttons{
        left: .5rem;
        right: auto;
    }
    
    .window.mobileSize{
        right: 0;
        max-width: 12rem;
        max-height: 25rem;
        width: 40%;
        height: 90%;
        transform: perspective(400px) rotateY(-25deg) rotateX(5deg);
        box-shadow: 5px 5px 10px ${colors.black};
        border-radius: 0 0 .5rem .5rem;
    }
    .window.mobileSize .window__tab-buttons .tabButton, .window.desktopSize .window__tab-buttons .tabButton{
        width: .5rem;
        height: .5rem;
    }
    .window.mobileSize .window__tab{
        justify-content: flex-start;
        padding-left: 1.5rem;
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
        height: 100%;
        border-radius: 0 0 .5rem .5rem;
        background-color: #19191a79;
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px); 
        font-size: 1.2rem;
    }
`