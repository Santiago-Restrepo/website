import {TiSocialInstagram, TiContacts} from 'react-icons/ti'
import {FaWhatsapp, FaFacebookF, FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import styles from './styles';
import {useState, useLayoutEffect, useEffect} from 'react';
import gsap from 'gsap';
import { colors } from '../../styles/theme';


const SocialMedia = () => {
    const [socialShowed, setSocialShowed] = useState(false)
    const [animations, setAnimations] = useState(null)
    
    const isHopefullyDomEnvironment =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'

    const useIsomorphicLayoutEffect = isHopefullyDomEnvironment
    ? useLayoutEffect
    : useEffect
    
    useIsomorphicLayoutEffect(()=>{
        let fadeInLeft = gsap.to(".socialMedia__container", {
            duration: .7, 
            x: 0, 
            background: `linear-gradient(${colors.primary}, ${colors.secondary})`, 
            paused: true,
        });
        let rotate360 = gsap.to(".showButton", {
            duration: .7, 
            rotateY: 360,
            paused: true,
        });

        gsap.to(".socialMedia__container", {
            duration: 0, 
            x: 100,
        });
        setAnimations({
            socialIcons: fadeInLeft,
            showButton: rotate360
        })
    },[])
    return ( 
        <section id="contact" className={`socialMedia ${socialShowed && 'show'}`}>
            <button 
                className={`showButton ${socialShowed && 'closeButton'}`}
                onClick={()=> {
                    if (!socialShowed) {
                        animations.socialIcons.play()
                        animations.showButton.play()
                        setSocialShowed(true)
                    } else {
                        setSocialShowed(false)
                        animations.socialIcons.reverse()
                        animations.showButton.reverse()
                        
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
                <a href="" className="socialMedia__button">
                    <FaGithub/>
                </a>   
            </div>
            <style jsx>{styles}</style>
        </section>
    )
}

export default SocialMedia;