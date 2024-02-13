import React from 'react';
import { useNavigate } from 'react-router-dom';

const Link = ({ to, className,style,children,aria_current="page" , onClick}) => {
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
      onClick={(e)=>{
        handleClicked();// call handleClicked function to control navigation bar when click on it
        onClick&&onClick(e) // if onClick is not undefined, call it =>Change style for nav element
      }}
      href='#'
      aria_current={aria_current!=="page"?aria_current:"page"}
    >
      {children}
    </a>
  );
};

export default Link;
