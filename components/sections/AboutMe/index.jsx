import Image from 'next/image';
import React from 'react';
import DialogText from '../../DialogText'
import mePhoto from '../../../assets/me.png'
import styles from './styles';

const AboutMe = () => {
    return ( 
        <section className='aboutMe' id='aboutMe'>
            <Image src={mePhoto}/>
            <DialogText/>
            <style jsx>{styles}</style>
        </section>
    )
}

export default AboutMe;