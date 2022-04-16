// import Image from 'next/image';
import React from 'react';
import styles from './styles';
// import logo from '../../../assets/SRI.png'
const Header = () => {
    return ( 
        <header id='header'>
            <span>SRI</span>
            {/* <Image
                src={logo}
                alt="Picture of the author"
                width={50}
                height={50}
            /> */}
            <style jsx>{styles}</style>
        </header>
    )
}

export default Header;