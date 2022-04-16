import React from 'react';
import styles from './styles';
import { useLayoutEffect, useEffect } from 'react';
const Numbers = () => {
    const isHopefullyDomEnvironment =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'

    const useIsomorphicLayoutEffect = isHopefullyDomEnvironment
    ? useLayoutEffect
    : useEffect
    useIsomorphicLayoutEffect(() => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
        /* La pantalla tiene al menos 400 píxeles de ancho */
            var atScroll = false;
            let parallaxText = document.querySelectorAll(".numbers p");

            const scrollProgress = () => {
                atScroll = true;
            };

            const raf = () => {
                if (atScroll) {
                    parallaxText.forEach((element, index) => {
                        if (index === 1) {
                            element.style.transform = "translateY(" + window.scrollY / 500 + "%)";
                        }else{
                            element.style.transform = `translateY(-${(window.scrollY / 500) + 30}%) scale(.7)`;
                        }
                    });
                    atScroll = false;
                }
                
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);
            window.addEventListener("scroll", scrollProgress);
        }
    }, [])
    
    return ( 
        <div className="numbers">
            <p>101010010101001010100101010010101001010100101010010101001010100101010010101001</p>
            <p>101010010101001010100101010010101001010100101010010101001010100101010010101001</p>
            <p>101010010101001010100101010010101001010100101010010101001010100101010010101001</p>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Numbers;