import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsProp.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

    let MessageElements = props.dialogsProp.messages.map( m => <Message message={m.message} id={m.id} />)


  return(
      <div className={s.dialogs}>
          <div className={s.dioalogsItems}>
              {
                 dialogsElements
              }
          </div>
          <div className = {s.messages}>
              {
                  MessageElements
              }
          </div>
      </div>
  )
}


export default Dialogs;
