import React from 'react';

const ConsoleText = ({text}) => {
    return ( 
        <p className='consoleText'>
            <span className='consoleText__prompt'>santi@restrepo :~$  </span>
            {text}
        </p>
    )
}

export default ConsoleText;