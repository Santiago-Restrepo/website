import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .window{
        display: flex;
        flex-direction: column;
        margin: 1rem 1.5rem 1rem;
        padding: 0 1.5rem;
        max-width: 45rem;
        margin: 0 auto;
        color: ${colors.white};
        border-radius: .5rem;
    }

    .window.desktopSize, .window.mobileSize{
        position: absolute;
        background-size: cover;
        padding: 0;

        /* border: 2px inset ${colors.gray}33; */
        
    }
    .window.desktopSize .window__tab, .window.mobileSize .window__tab{
        padding: .7rem 0;
    }
    .window.desktopSize{
        top: 10%;
        left: 0;
        width: 90%;
        max-width: 26rem;
        height: 80%;
        max-height: 15rem;
        transform: perspective(600px) rotateY(25deg) rotateX(12deg);
        box-shadow: -5px 5px 5px ${colors.black};
        /* border-radius: 0 0 .5rem .5rem; */
    }
    .window.desktopSize .window__tab-buttons{
        left: .5rem;
        right: auto;
    }
    
    .window.mobileSize{
        right: 0;
        max-width: 10rem;
        max-height: 25rem;
        width: 40%;
        height: 85%;
        transform: perspective(300px) rotateY(-25deg) rotateX(0deg);
        box-shadow: 5px 5px 5px ${colors.black};
        /* border-radius: 0 0 .5rem .5rem; */
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
        background-color: #35353579;
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px); 
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1024px){
        .window.mobileSize{
            transform: perspective(300px) rotateY(-15deg) rotateX(0deg);
        }
        .window.desktopSize{
            transform: perspective(300px) rotateY(10deg) rotateX(0deg);
            max-height: 25rem;
        }
    }
`