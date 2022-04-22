import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return(
    <div className={s.content}>
      <div className = {s.posts}>
        <Post message = 'Пошёл нахуй' like_count = '1'/>
        <Post message = 'Пошёл нахер' like_count = '100'/>
        <Post message = 'Пошёл в пизду' like_count = '10'/>
        <Post message = 'Пошёл в жопу' like_count = '20'/>
        <Post message = 'Пошёл куда-то' like_count = '30'/>
      </div>
    </div>
  )
}


export default MyPosts;
