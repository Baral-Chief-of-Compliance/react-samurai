import React from 'react';
import s from './Navbar.module.css';




const Navbar = () => {
  return(
    <nav className={s.nav}>
      <div className = {s.item}>
        <a href="#">Профиль</a>
      </div>
      <div className ={s.item}>
        <a href="#">Сообщения</a>
      </div>
      <div className = {`${s.item} ${s.active}`}>
        <a href="#">Настройки</a>
      </div>
    </nav>
  )
}


export default Navbar;
