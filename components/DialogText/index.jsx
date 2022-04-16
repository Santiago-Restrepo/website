import React from 'react';
import ConsoleText  from '../ConsoleText';
import KnowMoreButton from '../buttons/KnowMoreButton'
import styles from './styles';

const DialogText = () => {
    return ( 
        <div className='dialogText'>
            <ConsoleText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minima debitis quas! Rerum, voluptatibus cupiditate!consoleText"/>
            <KnowMoreButton direction="right" content="Saber más"/>
            <style jsx>{styles}</style>
        </div>
    )
}
export default DialogText;