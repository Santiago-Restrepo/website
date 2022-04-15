import React from 'react';
import styles from './styles';
const Window = ({children}) => {
    return ( 
        <div className='window'>
            <div className="window__tab">
                <span>Santi@restrepo: ~</span>
                <div className="window__tab-buttons">
                    <div className="tabButton"></div>
                    <div className="tabButton"></div>
                    <div className="tabButton"></div>
                </div>
            </div>
            <div className="window__content">
                {children}
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Window;