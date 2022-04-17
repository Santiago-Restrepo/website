import React, {useState} from 'react';
import KnowMoreButton from '../buttons/KnowMoreButton'
import Window from '../Window';
import greazyImage from '../../assets/greazy.png'
import ofiartesImage from '../../assets/ofiartes.png'
import demotosImage from '../../assets/demotos.png'
import { useLayoutEffect , useEffect} from 'react';
import styles from './styles';
import gsap from 'gsap';
const projects = [
    {
        name: "Greazy",
        description: "Landing page / eCommerce para la marca de ropa Greazy desarrollada con WebPack, HTML5, CSS3 y JavaScript. Tecnologías nativas para un excelente rendimiento, buen posicionamiento SEO y una intuitiva experiencia de usuario",
        link: "https://www.greazy.shop/",
        image: greazyImage
    },
    {
        name: "Ofiartes",
        description: "Aplicación web desarrollada con Webpack, ReactJS, Sass y el CMS Contentful con el objetivo de ofrecer información y apoyo a la Corporación Ofiartes y todos sus beneficiarios",
        link: "https://ofiartes.vercel.app/",
        image: ofiartesImage
    },
    {
        name: "DeMotos",
        description: "Página web para la agendación de citas y consulta de servicios del taller Demotos Medellín utilizando Webpack, pug, Sass y Javascript",
        link: "https://demotosmedellin.com/",
        image: demotosImage
    }
]

const DialogProject = () => {
    const [ currentProject, setCurrentProject ] = useState(projects[0]);
    const isHopefullyDomEnvironment =
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'

    const useIsomorphicLayoutEffect = isHopefullyDomEnvironment
    ? useLayoutEffect
    : useEffect
    useIsomorphicLayoutEffect(()=>{
        const projectImages = document.querySelectorAll('.currentProject__image');
        projectImages[0].style.backgroundImage = `url(${currentProject.image.src})`;
        projectImages[1].style.backgroundImage = `url(${currentProject.image.src})`;
    },[])
    return ( 
        <div className='currentProject'>
            <div className="currentProject__images">
                <Window classes="desktopSize">
                    <div className="currentProject__image"></div>
                </Window>
                <Window classes="mobileSize">
                    <div className="currentProject__image"></div>
                </Window>
            </div>
            <div className="currentProject__content">
                <h2 className='currentProject__title'>{currentProject.name}</h2>
                <p className='currentProject__description'>{currentProject.description}</p>
                <div className="currentProject__buttons">
                    <a href={currentProject.link} target="_blank" rel="noreferrer" className='seeMoreButton'>Ver proyecto</a>
                    <KnowMoreButton direction="right" content="Siguiente proyecto" classes="floating" handleClick={()=>{
                        const currentIndexProject = projects.indexOf(currentProject);
                        const projectImages = document.querySelectorAll('.currentProject__image');
                        let tl = gsap.timeline({
                            defaults: {
                                duration: 1.0,
                                ease: "expo.inOut"
                            }
                        });
                        let tl2 = gsap.timeline({
                            defaults: {
                                duration: 1.0,
                                ease: "expo.inOut"
                            }
                        });
                        let tl3 = gsap.timeline({
                            defaults: {
                                duration: 1.0,
                                ease: "expo.inOut"
                            }
                        });
                        tl.to(".desktopSize .currentProject__image", { width: 0 }).to(".desktopSize .currentProject__image", { width: "100%" });
                        tl2.to(".mobileSize .currentProject__image", { transform: "translateX(105%)" }).to(".mobileSize .currentProject__image", { transform: "translateX(0)" });
                        tl3.to([".currentProject__title",".currentProject__description"], { opacity: 0 }).to([".currentProject__title",".currentProject__description"], { opacity: 1 });
                        // tl3.to(".seeMoreButton", { transform: "rotateX(45deg);" }).to(".mobileSize .currentProject__image", { transform: "rotateX(0deg)" });
                        setTimeout(()=>{
                            if (currentIndexProject !== projects.length -1) {  
                                setCurrentProject(projects[currentIndexProject + 1])
                                projectImages[0].style.backgroundImage = `url(${projects[currentIndexProject + 1].image.src})`;
                                projectImages[1].style.backgroundImage = `url(${projects[currentIndexProject + 1].image.src})`;
                            } else {
                                setCurrentProject(projects[0])
                                projectImages[0].style.backgroundImage = `url(${projects[0].image.src})`;
                                projectImages[1].style.backgroundImage = `url(${projects[0].image.src})`;
                            } 
                        }, 1000)
                    }}/>
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default DialogProject;