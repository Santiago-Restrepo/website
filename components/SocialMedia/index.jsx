import {TiSocialInstagram, TiContacts} from 'react-icons/ti'
import {FaWhatsapp, FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import styles from './styles';
import {useState, useLayoutEffect} from 'react';
import gsap from 'gsap';
import { colors } from '../../styles/theme';

const SocialMedia = () => {
    const [socialShowed, setSocialShowed] = useState(false)
    const [animation, setAnimation] = useState(null)
    useLayoutEffect(()=>{
        var tween = gsap.to(".socialMedia__container", {
            duration: .5, 
            x: 0, 
            paused: true,
            background: `linear-gradient(${colors.primary}, ${colors.secondary})`
        });
        gsap.to(".socialMedia__container", {
            duration: 0, 
            x: 100, 
        });
        setAnimation(tween)
    },[])
    return ( 
        <section id="contact" className={`socialMedia ${socialShowed && 'show'}`}>
            <button 
                className={`showButton`}
                onClick={()=> {
                    if (!socialShowed) {
                        animation.play()
                        setSocialShowed(true    )
                    } else {
                        setSocialShowed(false)
                        animation.reverse()
                        
                    }
                }}
            >
                {
                    !socialShowed ?
                    <TiContacts/>
                    : 
                    <AiOutlineCloseCircle/>
                }
            </button>
            <div className="socialMedia__container">

                <a href="" className="socialMedia__button">
                    <FaFacebookF/>
                </a>
                <a href="" className="socialMedia__button">
                    <TiSocialInstagram/>
                </a>
                <a href="" className="socialMedia__button">
                    <FaWhatsapp/>
                </a>
                <a href="" className="socialMedia__button">
                    <BsTwitter/>
                </a>   
            </div>
            <style jsx>{styles}</style>
        </section>
    )
}

export default SocialMedia;