import {useState} from 'react';
import ConsoleText  from '../ConsoleText';
import KnowMoreButton from '../buttons/KnowMoreButton'
import styles from './styles';

const DialogText = () => {
    const facts = [
        "Soy un desarrollador web con 2 años de experiencia creando proyectos freelance usando tecnologías a la vanguardia para clientes con necesidades de modernización para sus negocios",
        "Desarrollo desde la configuración hasta el despliegue de proyectos",
        "Manejo de tecnologías como ReactJS, Javascript, CSS, git, mongoDB, entre otras",
        "Pensamiento crítico y lógico a la hora de resolver problemas",
        "Capacidad de adaptación en el momento de trabajar en equipo",
        "Aprendizaje evolutivo ante las necesidades del entorno",
    ]
    const [showedFacts, setShowedFacts] = useState([facts[0]]);
    return ( 
        <div className='dialogText'>
            <div className="dialogText__container">
                {
                    showedFacts.map((fact, index) => <ConsoleText key={`fact ${index}`} text={fact} classes="aboutMeConsoleText"/>)
                }
            </div>
            <KnowMoreButton direction="right" content="Saber más" handleClick={()=>{
                setShowedFacts(facts.slice(0, showedFacts.length + 1));
                setTimeout(()=>{
                    const dialogContainer = document.querySelector('.dialogText__container');
                    dialogContainer.scrollTo(0, 1000);
                }, 10 )

            }}/>
            <style jsx>{styles}</style>
        </div>
    )
}
export default DialogText;