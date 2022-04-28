import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return(
    <nav className={s.nav}>
      <div className = {s.item}>
        <NavLink to ="/profile">Профиль</NavLink>
      </div>
      <div className ={s.item}>
        <NavLink to ="/dialogs">Сообщения</NavLink>
      </div>
      <div className = {`${s.item} ${s.active}`}>
        <a href="#">Настройки</a>
      </div>
    </nav>
  )
}


export default Navbar;
