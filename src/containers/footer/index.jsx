import { Link } from 'react-router-dom'
import { mais_vinme, social_links, vinme_infos, vinme_links } from '../../utils/data'
import './footer.sass'

const Footer = () => {
  return (
    <footer className='footer'>

      <div className="footer_social">
        <ul>
          {social_links.map(link => (
            <li key={link.id} >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer_infos">
        <div className="footer_logo">
          <img src="/svg/VinMe Logo.svg" alt="vinme logo" />
          <img src="/svg/Vinme banner.svg" alt="vinme banner" />
        </div>

        <div className="footer_links">
          <h2 className="footer_links_title">VINME</h2>
          <ul>
            {vinme_links.map(link => (
              <Link key={link.id} className='footer_link' to={link.url}>
                <i className={link.icon}></i>
                <strong>{link.name}</strong>
              </Link>
            ))}
          </ul>
        </div>

        <div className="footer_links">
          <h2 className="footer_links_title">MAIS VINME</h2>
          <ul>
            {mais_vinme.map(link => (
              <Link key={link.id} className='footer_link' to={link.url}>
                <i className={link.icon}></i>
                <strong>{link.name}</strong>
              </Link>
            ))}
          </ul>
        </div>

        <div className="footer_links">
          <h2 className="footer_links_title">INFOS</h2>
          <ul>
            {vinme_infos.map(link => (
              <Link key={link.id} target={link.target} className='footer_link' to={link.url}>
                <i className={link.icon}></i>
                <strong>{link.text}</strong>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer_copyright">
        <span>Copyright ©2024 - Vinme | Todos os direitos reservados</span>
      </div>
      
    </footer>
  )
}

export default Footer
