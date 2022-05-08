import React from 'react';
import s from './Friend.module.css';


const Friend =(props)=>{
    console.log(props.photo)
    return(
        <div className={s.content}>
            <div>
                <img className={s.img} src={props.photo}></img>
                <div>{props.name}</div>
            </div>
        </div>
    )
}


export default Friend