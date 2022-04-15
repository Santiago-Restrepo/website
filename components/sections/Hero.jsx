import React from 'react';
import ConsoleText from '../consoleText';
import Window from '../Window';

const Hero = () => {
    return ( 
        <section className='hero'>
            <Window>
                <ConsoleText text="¡Hola!"/>
                <ConsoleText text="Soy Santiago Restrepo Idárraga"/>
                <ConsoleText text="Un desarrollador web pasionado por la seguridad informática"/>
                <ConsoleText text=""/>
            </Window>
        </section>
    )
}

export default Hero;