import React from 'react';
import Arrow from '../Arrow';

const MoveButton = ({direction,content}) => {
    return ( 
        <button className='moveButton'>
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
        </button>
    )
}

export default MoveButton;