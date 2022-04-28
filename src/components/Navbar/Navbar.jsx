import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
<<<<<<< HEAD
=======


>>>>>>> 801b5488fb7c408c11ef0d4820bc7b41926d41a1


const Navbar = () => {
  return(
    <nav className={s.nav}>
      <div className={s.item}>
          <NavLink to='/news'>Новости</NavLink>
      </div>
      <div className = {s.item}>
<<<<<<< HEAD
        <NavLink to ="/profile">Профиль</NavLink>
      </div>
      <div className ={s.item}>
        <NavLink to ="/dialogs">Сообщения</NavLink>
=======
        <NavLink to='/profile'>Профиль</NavLink>
      </div>
      <div className ={s.item}>
        <NavLink to='/dialogs'>Сообщения</NavLink>
      </div>
      <div className={s.item}>
          <NavLink to='/music'>Музыка</NavLink>
>>>>>>> 801b5488fb7c408c11ef0d4820bc7b41926d41a1
      </div>
      <div className = {`${s.item} ${s.active}`}>
        <NavLink to="/settings">Настройки</NavLink>
      </div>
    </nav>
  )
}


export default Navbar;
