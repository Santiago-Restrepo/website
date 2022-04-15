import React from 'react';
import styles from './styles';

const ConsoleText = ({text}) => {
    return ( 
        <p className='consoleText'>
            <span className='consoleText__prompt'>santi@restrepo :~$  </span>
            {text}
            <style jsx>{styles}</style>
        </p>
    )
}

export default ConsoleText;