/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './button.sass';

const Button = ({ type = 'button', classe, to, children, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={classe}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classe}>
      {children}
    </button>
  );
};

export default Button;