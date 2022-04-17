import css from 'styled-jsx/css'
import { colors } from '../../styles/theme'

export default css`
    .consoleText{
        display: flex;
        flex-wrap: wrap;
        /* overflow-wrap: break-word; */
        padding: 0 1rem;
        color: ${colors.white};
        width: 100%;
    }
    
    .consoleText__prompt{
        margin-right: .5rem;
        background: linear-gradient(to right, ${colors.primary}, ${colors.secondary});
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .consoleText b{
        font-weight: 500;
    }
    .typewriter {
        display: block;
        width: fit-content;

    }
    .animate .typewriter{
        /* width: fit-content; */
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        white-space: nowrap;
        border-right: .15em solid ${colors.primary}; /* The typwriter cursor */
    }
    .animate .typewriter.characters6{
        animation: 
        typing6ch 1s steps(5, end),
        blink-caret .75s step-end infinite;
    }
    .animate .typewriter.characters30{
        animation: 
        typing30ch 1.5s steps(30, end),
        blink-caret .75s step-end infinite;
    }
    .animate .typewriter.characters60{
        animation: 
        typing60ch 2s steps(60, end),
        blink-caret .75s step-end infinite;
    }
    .animate .typewriter.characters1{
        animation: 
        typing1ch 1s steps(1, end),
        blink-caret .75s step-end infinite;
    }
    .aboutMeConsoleText{
        max-width: 15rem;
    }
    /* The typing effect */
    @keyframes typing6ch {
        from { width: 0 }
        to { width: 5ch }
    }
    @keyframes typing30ch {
        from { width: 0 }
        to { width: 25ch }
    }
    @keyframes typing60ch {
        from { width: 0 }
        to { width: 50ch }
    }
    @keyframes typing1ch {
        from { width: 0 }
        to { width: 1ch }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: ${colors.primary}; }
    }
`