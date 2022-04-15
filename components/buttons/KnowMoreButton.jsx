import React from 'react';
import Arrow from '../Arrow';

const KnowMoreButton = ({direction,content}) => {
    return ( 
        <button className='knowMoreButton'>
            <div className="knowMoreButton__content">
                {content}
            </div>
            <Arrow direction={direction}/>
        </button>
    )
}

export default KnowMoreButton;