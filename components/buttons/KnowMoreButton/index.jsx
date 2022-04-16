import React from 'react';
import Arrow from '../../Arrow';
import styles from './styles';

const KnowMoreButton = ({direction,content, classes}) => {
    return ( 
        <button className={`knowMoreButton ${classes}`}>
            <div className="knowMoreButton__content">
                {content}
            </div>
            <Arrow direction={direction}/>
            <style jsx>{styles}</style>
        </button>
    )
}

export default KnowMoreButton;