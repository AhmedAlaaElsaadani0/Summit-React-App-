import React from 'react';
import { useNavigate } from 'react-router-dom';

const Link = ({ to, className,style,children }) => {
  const navigate = useNavigate();
  const handleClicked = () => {
    const bars = document.getElementById('bars');

    if (bars) {
      bars.classList.add('show');

      setTimeout(() => {
        bars.classList.remove('show');
        bars.classList.add('hide');
        navigate(to);
      }, 400);

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
