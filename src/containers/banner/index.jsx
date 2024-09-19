import { Link } from 'react-router-dom';
import useOnScreen from '../../config/viewOnScreen';
import { social_links } from '../../utils/data';
import Universe from '../universe';
import './banner.sass'
import Button from '../../components/button';
import BannerInfos from './components';

const Banner = () => {
  const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  return (
    <section className='banner' id='banner'>
      <div className={`banner_box ${isOnScreen ? 'visible' : ''}`} ref={ref}>
        <Universe />

        <div className="banner_links">
          {social_links.map(link => (
            <Link key={link.id} to={link.url} className={`banner_link ${isOnScreen ? 'visible' : ''}`} target="_blank" rel="noopener noreferrer">
              <i className={`${link.icon} banner_link_logo`}></i>
            </Link>
          ))}
        </div>

        <div className="banner_text">
          <div className="banner_text_box">
            <h2 className={`${isOnScreen ? 'visible' : ''}`}>Transformamos grandes histórias</h2>
            <h2 className={`${isOnScreen ? 'visible' : ''}`}>em <span className="typing">artes e experiencias</span> unicas.</h2>

            <p className={`${isOnScreen ? 'visible' : ''}`}>Seu sucesso é nossa melhor <span className="typing">arte</span>, cada projeto que assumimos é uma tela em branco,</p>
            <p className={`${isOnScreen ? 'visible' : ''}`}>onde cada pixel conta para <span className="typing">desenvolver</span> uma obra-prima única.</p>
          </div>

          <div className={`banner_text_btn ${isOnScreen ? 'visible' : ''}`}>
            <Button to="/contato" classe="button">
              Eleve seu negócio ao próximo nível
            </Button>
          </div>
        </div>

        <div className={`banner_svg ${isOnScreen ? 'visible' : ''}`} ref={ref}>
          <img src="svg/Vinme 1.svg" alt="Vinme" />
        </div>
      </div>

      <div className="banner_infos">
          <BannerInfos/>
      </div>
    </section>
  )
}

export default Banner
