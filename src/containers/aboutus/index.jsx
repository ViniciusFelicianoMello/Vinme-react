import { Link } from 'react-router-dom';
import useOnScreen from '../../config/viewOnScreen'
import './aboutus.sass'
import AboutInfos from './components/about_infos';

const AboutUs = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  return (
    <section className='about' id='about'>
        
        <div className={`about_title ${isOnScreen ? 'visible' : ''}`} ref={ref}>
            <h2 className={`${isOnScreen ? 'visible' : ''}`} ref={ref}><Link to="/aboutus">VINME</Link></h2>
            <h3 className={`${isOnScreen ? 'visible' : ''}`} ref={ref}>desenvolvimento + web + design</h3>
        </div>
        <div className="about_content">
            
            <div className={`about_text ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                <p className={`${isOnScreen ? 'visible' : ''}`} ref={ref}>Formada em 2024, a <span>Vinme</span> é uma startup fundada por um único integrante, comprometida em transformar histórias em projetos únicos. Com a missão de ajudar empresas a se destacar, entregamos <span>websites e designs exclusivos</span> para proporcionar ao usuário uma experiência incrível e inesquecível.</p>
                <p className={`${isOnScreen ? 'visible' : ''}`} ref={ref}>Ao escolher a <span>Vinme</span>, você opta por um parceiro que valoriza uma abordagem amigável e colaborativa, focado em construir relacionamentos de longo prazo, com qualidade e inovação. Estamos sempre nos atualizando para oferecer o melhor, comprometendo-nos a atender não apenas às necessidades imediatas, mas também a contribuir para o crescimento de seus negócios. Pensamos em cada detalhe para garantir a máxima satisfação.</p>
            </div>
            
            <div className="about_infos">

                <AboutInfos icon="fa-solid fa-lightbulb" our="Nossa" highlight="missão" text="é transformar histórias em projetos exclusivos" />
                <AboutInfos icon="fa-solid fa-eye" our="Nossa" highlight="visão" text="é ser uma empresa renomada na área de tecnologia e design" />
                <AboutInfos icon="fa-solid fa-heart" our="Nossos" highlight="valores" text="são a qualidade, compromisso, inovação, satisfação e colaboração" />
                
            </div>
        </div>
    </section>
  )
}

export default AboutUs
