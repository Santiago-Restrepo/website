import {useState} from 'react';
import ConsoleText  from '../ConsoleText';
import KnowMoreButton from '../buttons/KnowMoreButton'
import styles from './styles';
import gsap from 'gsap';
import { colors } from '../../styles/theme';
const DialogText = () => {
    const facts = [
        "Soy un desarrollador web con 2 años de experiencia creando proyectos freelance usando tecnologías a la vanguardia para clientes con necesidades de modernización para sus negocios",
        "Desarrollo desde la configuración hasta el despliegue de proyectos",
        "Manejo tecnologías como ReactJS, Javascript, CSS, git, mongoDB, entre otras",
        "Poseo un pensamiento crítico y lógico a la hora de resolver problemas",
        "Tengo una gran capacidad de adaptación en el momento de trabajar en equipo",
        "Aprendo evolutivamente ante las necesidades del entorno",
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
                let auxFacts = facts.slice(0, showedFacts.length + 1);
                setShowedFacts(auxFacts);

                // let tl = gsap.timeline({
                //     defaults: {
                //         duration: auxFacts[auxFacts.length - 1].length * 1.5 / 30,
                //         ease: "expo.out",
                        
                //     }
                // });
                setTimeout(()=>{
                    const dialogContainer = document.querySelector('.dialogText__container');
                    dialogContainer.scrollTo(0, 1000);
                    // tl.to(`.aboutMeConsoleText:nth-child(${auxFacts.length})`, { 
                    //     width: 0,
                    //     borderColor: "transparent"
                    // }).to(`.aboutMeConsoleText:nth-child(${auxFacts.length})`, { 
                    //     width: `${auxFacts[auxFacts.length - 1].length}ch`,
                        
                    // });
                }, 10)

            }}/>
            <style jsx>{styles}</style>
        </div>
    )
}
export default DialogText;