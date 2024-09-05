import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef  } from 'react';
import useOnScreen from '../../config/viewOnScreen';
import { vinme_links } from '../../utils/data';
import './header.sass'

const Header = () => {
  const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const checkIconRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark_mode_active');
    } else {
      document.body.classList.remove('dark_mode_active');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLinkClick = () => {
    if (checkIconRef.current) {
      checkIconRef.current.checked = false;
    }
  };
  
  return (
  <>
    <header className={`header ${isOnScreen ? 'visible' : ''}`} ref={ref}>
      <Link className='header_logo' to="/">
        <img src="/svg/VinMe Logo.svg" alt="" className='header_logo_svg'/>
        <img src="/svg/Vinme banner.svg" alt="" className='header_logo_title'/>
      </Link>

      <nav className='header_options'>
        <ul className="options_list">
          {vinme_links.map(link => (
            <Link key={link.id} to={link.url} className={`${'options_item'} ${location.pathname === link.url ? 'options_item_active' : ""}`}>
              <span>{link.name}</span>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="header_controls">
        <div className="dark_mode_but">
        <input type="checkbox" name="dark-mode" id="dark-mode" className='dark_chk' style={{ display: 'none' }} checked={isDarkMode} onChange={toggleDarkMode}/>
          <label htmlFor="dark-mode" className='dark_label'>
            <i className="fa-solid fa-moon icon-moon"></i>
            <i className="fa-solid fa-sun icon-sun"></i>
          </label>
        </div>
      </div>

    </header>

    <header className='header_menu'>
      <input type="checkbox" name="check-icon" id="check-icon" className='check-icon' style={{ display: 'none' }} ref={checkIconRef}/>
      <label htmlFor="check-icon" className='icon_menu'>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>

      <nav className='menu_options'>
        <ul className='dropdown_options_list'>
          {vinme_links.map(link => (
            <Link key={link.id} to={link.url} className={`${'options_item'} ${location.pathname === link.url ? 'options_item_active' : ""}`} onClick={handleLinkClick}>
              <i className={`${link.icon} option_icon`}></i>
              <span className='option_title'>{link.name}</span>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  </>
  )
}

export default Header
