import React, {useEffect, useLayoutEffect} from 'react';
import { colors } from '../../styles/theme';
import styles from './styles';

const ConsoleText = ({text, classes}) => {

    return ( 
        <p className={`consoleText ${classes}`}>
            
            <b className='consoleText__prompt'>santi@restrepo :~$  </b>
            {
                classes === "animate" ?
                <b className={`typewriter characters${text.length}`}>
                    {text}
                </b>
                :
                <b className='typewriter' >
                    {text}
                </b>
            }
            {/* <style jsx>{`
                .container {
                margin: 50px;
                }
                p {
                color: blue;
                }
            `}</style> */}
            <style jsx>{styles}</style>
        </p>
    )
}

export default ConsoleText;