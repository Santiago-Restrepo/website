import Image from 'next/image';
import React from 'react';
import DialogText from '../../DialogText'
import mePhoto from '../../../assets/me.png'
import styles from './styles';
import {CgFileDocument} from 'react-icons/cg'
import { colors } from '../../../styles/theme';
const AboutMe = () => {
    return ( 
        <section className='aboutMe' id='aboutMe'>
            <div className="aboutMe__container">
                <div className="aboutMe__image">
                    <Image src={mePhoto} style={{
                        borderRadius: "1rem",
                        zIndex: 1,
                    }}/>
                <a href="https://www.canva.com/design/DAE3zi65Js4/K3TmhoieLYNaXFIDQ27oNg/view?website#4" target="_blank" rel="noreferrer" className='cvLink'>
                    <CgFileDocument color={colors.white}/>
                </a>
                </div>
                <DialogText/>
            </div>
            <style jsx>{styles}</style>
        </section>
    )
}

export default AboutMe;