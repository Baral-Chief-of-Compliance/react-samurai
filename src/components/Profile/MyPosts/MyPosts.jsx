import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {


    let postElemenst = props.items.map( p => <Post message = {p.message} like_count = {p.like_count} id = {p.id}/>)

  return(
    <div className={s.content}>
      <div className = {s.posts}>
          {
              postElemenst
          }
      </div>
    </div>
  )
}


export default MyPosts;
