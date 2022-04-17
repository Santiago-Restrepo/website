import Image from 'next/image';
import React from 'react';
import MoveButton from '../../buttons/MoveButton';
import ConsoleText from '../../ConsoleText';
import Window from '../../Window';
import styles from './styles';
import {useEffect, useLayoutEffect, useState} from 'react';

const Hero = () => {
    
    const [messages, setMessages] = useState(
        [
            {
                text:"¡Hola!",
                show: true
            },
            {
                text:"Soy Santiago Restrepo Idárraga",
                show: false
            }, 
            {
                text:"Un desarrollador web apasionado por la seguridad informática",
                show: false
            },
            {
                text:" ",
                show: false
            },
        ]
    )
    const isHopefullyDomEnvironment =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'

    const useIsomorphicLayoutEffect = isHopefullyDomEnvironment
    ? useLayoutEffect
    : useEffect
    let times = {
        "1": 1000,
        "2": 2500,
        "3": 6000,
        "4": 8500,

    }
    useIsomorphicLayoutEffect(() => {
        messages.map((element, i)=>{
            if (i !== 0) {
                setTimeout(()=>{
                    let auxMessages = [...messages.map((message, j) => {
                        if (j<=i) {
                            return(
                                {
                                    ...message,
                                    show: true
                                }
                            )
                        }else{
                            return message
                        }
                    })];
    
                    setMessages(auxMessages)
                    
                }, times[(i+1).toString()])
            }
        })
    }, [])
    return ( 
        <>
            <section className='hero' id='hero'>
                <Window tabText="Santi@restrepo: ~">
                    {
                        messages.filter(component => component.show).map((element, index) => {
                            
                            let filteredMessages = messages.filter(component => component.show);
                            if (index === filteredMessages.length - 1) {
                                return <ConsoleText key={`consoleText ${index}`} text={element.text} classes="animate"/>
                            }
                            return <ConsoleText key={`consoleText ${index}`} text={element.text}/>
                        })
                    }
                    {
                        // messages.map((el, index) => <ConsoleText key={`consoleText ${index}`} text={el.text} classes="animate"/>)
                    }
                </Window>
                {/* <Image style={{
                }} 
                    src={codeGif}
                    layout='raw'
                /> */}
            </section>
            <MoveButton direction="down" content="Lo que hago" link="#aboutMe"/>
            <style jsx>{styles}</style>
        </>
    )
}

export default Hero;