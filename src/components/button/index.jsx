/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './button.sass';

const Button = ({ type = 'button', to, children, onClick }) => {
  if (to) {
    return (
      <Link to={to} className='button'>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className='button'>
      {children}
    </button>
  );
};

export default Button;