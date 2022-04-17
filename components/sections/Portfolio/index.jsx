import React , {useLayoutEffect, useEffect} from 'react';
import DialogProject from '../../DialogProject';
import Window from '../../Window';
import MoveButton from '../../buttons/MoveButton';
import styles from './styles';

const Portfolio = () => {
    const isHopefullyDomEnvironment =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'

    const useIsomorphicLayoutEffect = isHopefullyDomEnvironment
    ? useLayoutEffect
    : useEffect
    useIsomorphicLayoutEffect(() => {
        var atScroll = false;
        let parallaxText = document.querySelectorAll(".portfolio__title h2");

        const scrollProgress = () => {
            atScroll = true;
        };

        const raf = () => {
            if (atScroll) {
                parallaxText.forEach((element, index) => {
                    if (index === 1) {
                        element.style.transform = "translateX(" + window.scrollY / 200 + "%)";
                    }else{
                        element.style.transform = `translateX(-${(window.scrollY / 200)}%)`;
                    }
                });
                atScroll = false;
            }
            
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
        window.addEventListener("scroll", scrollProgress);
    }, [])
    return ( 
        <section className='portfolio'>
            <div className="portfolio__title">
                <h2 className="portfolio__title-projects">Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos  | Proyectos | Proyectos | Proyectos</h2>
                <h2 className="portfolio__title-selected">seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados</h2>
            </div>
            <div className="portfolio__container">
                <DialogProject/>
            </div>
            <MoveButton direction="up" content="Volver Arriba" link="#header"/>
            <style jsx>{styles}</style>
        </section>
    )
}

export default Portfolio;