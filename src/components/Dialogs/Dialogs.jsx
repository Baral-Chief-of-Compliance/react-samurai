import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {


    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

    let MessageElements = state.messages.map( m => <Message message={m.message} id={m.id} />)

    let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
   }

    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


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

          <div>
              <div>
                  <textarea value = {newMessageBody}
                            onChange= {onNewMessageChange}
                            placeholder = 'Въеби мне'></textarea>
              </div>
              <div>
                  <button onClick={onSendMessageClick}>Добавить сообщение</button>
              </div>

          </div>
      </div>
  )
}


export default Dialogs;
