import React, {useState} from 'react';
import KnowMoreButton from '../buttons/KnowMoreButton'
import Window from '../Window';
import greazyImage from '../../assets/greazy.png'
import { useLayoutEffect , useEffect} from 'react';
import styles from './styles';

const projects = [
    {
        name: "Greazy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!",
        link: "https://127.0.0.1:8080",
        image: greazyImage
    },
    {
        name: "Ofiartes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!",
        link: "https://127.0.0.1:8080",
        image: ""
    },
    {
        name: "DeMotos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!",
        link: "https://127.0.0.1:8080",
        image: ""
    }
]

const DialogProject = () => {
    const [ currentProject, setCurrentProject ] = useState(projects[0]);const isHopefullyDomEnvironment =
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
                    {/* <Image src={currentProject.image}/> */}
                    <div className="currentProject__image"></div>
                </Window>
                <Window classes="mobileSize">
                    {/* <Image src={currentProject.image}/> */}
                    <div className="currentProject__image"></div>
                </Window>
            </div>
            <div className="currentProject__content">
                <h2 className='currentProject__title'>{currentProject.name}</h2>
                <p className='currentProject__description'>{currentProject.description}</p>
                <div className="currentProject__buttons">
                    <button className='seeMoreButton'>Ver proyecto</button>
                    <KnowMoreButton direction="right" content="Siguiente proyecto" classes="floating"/>
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default DialogProject;