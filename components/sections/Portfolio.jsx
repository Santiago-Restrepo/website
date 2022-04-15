import React from 'react';
import DialogProject from '../DialogProject';
import Window from '../Window';
import MoveButton from '../buttons/MoveButton'

const Portfolio = () => {
    return ( 
        <section className='portfolio'>
            <div className="portfolio__title">
                <h2 className="portfolio__title-projects">Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos | Proyectos  | Proyectos | Proyectos | Proyectos</h2>
                <h2 className="portfolio__title-selected">seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados  | seleccionados</h2>
            </div>
            <div className="portfolio__container">
                <DialogProject/>
                <Window>
                    <img src="" alt="" />
                </Window>
                <Window>
                    <img src="" alt="" />
                </Window>
            </div>
            <MoveButton direction="up"/>
        </section>
    )
}

export default Portfolio;