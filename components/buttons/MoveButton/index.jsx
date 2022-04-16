import Link from 'next/link';
import React from 'react';
import Arrow from '../../Arrow';
import styles from './styles';

const MoveButton = ({direction, content, link}) => {
    return (
        <Link href={link}>
            <a className={`moveButton ${direction}`}>
                {
                    direction === "up" ?
                    <>
                        <Arrow direction={direction}/>
                        <div className="moveButton__content">
                            {content}
                        </div>
                    </>
                    :
                    <>
                        <div className="moveButton__content">
                            {content}
                        </div>
                        <Arrow direction={direction}/>
                    </>
                    
                }
                <style jsx>{styles}</style>
            </a>
        </Link>
    )
}

export default MoveButton;