import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={s.dialog+' '+s.active}>
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = (props) => {
  return(
      <div className={s.dialogs}>
          <div className={s.dioalogsItems}>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/1'>кто бля</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/2'>я бля</NavLink>
              </div>
              <DialogItem name="кого ты выберешь" id="3"/>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/4'>нас</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/5'>или</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/6'>их</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/7'>а?</NavLink>
              </div>
          </div>
          <div className = {s.messages}>
              <div className={s.message}>КАК</div>
              <div className={s.message}>там</div>
              <div className={s.message}>с деньгами</div>
          </div>
      </div>
  )
}


export default Dialogs;
