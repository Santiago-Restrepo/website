import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineArrowRight } from 'react-icons/ai';
import { colors } from '../../styles/theme';

const Arrow = ({direction}) => {
    return ( 
        
        <>
        {
            direction === "up" ?
            <AiOutlineArrowUp color={colors.white}/>
            : direction === "down" ?
            <AiOutlineArrowDown color={colors.white}/>
            :
            <AiOutlineArrowRight color={colors.white}/>
        }
        </>
        
    )
}

export default Arrow;