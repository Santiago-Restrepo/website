import css from 'styled-jsx/css'
import { colors } from './theme'
import bg from '../assets/bg.png'
export const globalStyles = css.global`
    * {
        font-family: "Rajdhani", sans-serif;
        box-sizing: border-box;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }
    body{
        background-color: ${colors.black};
        background-image: url(${bg.src});
        background-repeat: round;
    }
    a{
        text-decoration: none;
    }
    button, a{
        cursor: pointer;
        transition: .3s;
    }
    button:hover, a:hover{
        transform: scale(.95);
    }

    @media screen and (min-width: 768px){
        html{
            font-size: 1.3rem;
        }
    }

`