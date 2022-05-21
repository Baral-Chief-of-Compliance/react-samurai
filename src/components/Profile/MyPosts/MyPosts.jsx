import React from 'react';
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Post from './Post/Post';


const MyPosts = (props) => {


    let postElemenst = props.items.map( p => <Post message = {p.message} like_count = {p.like_count} id = {p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

  return(
    <div className={s.content}>
      <h3>Мои псоты</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
            <button onClick={ addPost }>Добавить запись</button>
        </div>
      <div className = {s.posts}>
          {
              postElemenst
          }
      </div>
    </div>
  )
}


export default MyPosts;
