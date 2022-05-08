import React from "react";
import s from './FriendsBar.module.css';
import Frend from './Friend/Friend';


const FriendsBar = (props) =>{

    let FriendsElements = props.FriendsProps.friends.map( f => <Frend id={f.id} name={f.name} photo={f.photo} />);

    return(
        <div className={s.content}>
            {
                FriendsElements
            }
        </div>
    )
}


export default FriendsBar