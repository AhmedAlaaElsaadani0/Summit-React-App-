import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Link = ({ to, className,style,children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClicked = () => {
    const bars = document.getElementById('bars');

    if (bars) {
      bars.classList.add('show');

      setTimeout(() => {
        bars.classList.remove('show');
        bars.classList.add('hide');
        navigate(to);
      }, 800);

      setTimeout(() => bars.classList.remove('hide'), 1600);
    }
  };

  return (
    <a style={style}
      className={className}
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

export default Link;
