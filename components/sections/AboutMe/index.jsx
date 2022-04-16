import Image from 'next/image';
import React from 'react';
import DialogText from '../../DialogText'
import mePhoto from '../../../assets/me.png'
import styles from './styles';

const AboutMe = () => {
    return ( 
        <section className='aboutMe' id='aboutMe'>
            <div className="aboutMe__container">
                <Image src={mePhoto} style={{
                    borderRadius: "1rem",
                    zIndex: 1,
                }}/>
                <DialogText/>
            </div>
            <style jsx>{styles}</style>
        </section>
    )
}

export default AboutMe;