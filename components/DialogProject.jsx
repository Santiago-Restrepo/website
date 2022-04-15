import React, {useState} from 'react';
import ConsoleText  from './consoleText';
import KnowMoreButton from './buttons/KnowMoreButton'

const projects = [
    {
        name: "Greazy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!",
        link: "https://127.0.0.1:8080"
    },
    {
        name: "Ofiartes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!",
        link: "https://127.0.0.1:8080"
    },
    {
        name: "DeMotos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas!",
        link: "https://127.0.0.1:8080"
    }
]

const DialogProject = () => {
    const [ currentProject, setCurrentProject ] = useState(projects[0]);
    return ( 
        <div className='currentProject'>
            <h2 className='currentProject__title'>{currentProject.name}</h2>
            <p className='currentProject__description'>{currentProject.description}</p>
            <div className="currentProject__buttons">
                <button className='seeMoreButton'>Ver proyecto</button>
                <KnowMoreButton direction="right" content="Saber más"/>

            </div>
        </div>
    )
}

export default DialogProject;