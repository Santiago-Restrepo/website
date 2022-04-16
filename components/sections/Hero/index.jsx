import React from 'react';
import MoveButton from '../../buttons/MoveButton';
import ConsoleText from '../../ConsoleText';
import Window from '../../Window';
import styles from './styles';

const Hero = () => {
    return ( 
        <>
            <section className='hero'>
                <Window tabText="Santi@restrepo: ~">
                    <ConsoleText text="¡Hola!"/>
                    <ConsoleText text="Soy Santiago Restrepo Idárraga"/>
                    <ConsoleText text="Un desarrollador web apasionado por la seguridad informática"/>
                    <ConsoleText text=""/>
                </Window>
            </section>
            <MoveButton direction="down" content="Lo que hago" link="#aboutMe"/>
            <style jsx>{styles}</style>
        </>
    )
}

export default Hero;