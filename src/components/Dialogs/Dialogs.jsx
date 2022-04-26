import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return(
      <div className={s.dialogs}>
          <div className={s.dioalogsItems}>
              <div className={s.dialog}>
                  кто бля
              </div>
              <div className={s.dialog}>
                  я бля
              </div>
              <div className={s.dialog+' '+s.active}>
                  кого ты выберешь
              </div>
              <div className={s.dialog}>
                  нас
              </div>
              <div className={s.dialog}>
                  или
              </div>
              <div className={s.dialog}>
                  их
              </div>
              <div className={s.dialog}>
                  а?
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
