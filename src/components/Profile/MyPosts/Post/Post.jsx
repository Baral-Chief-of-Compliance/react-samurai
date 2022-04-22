import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

  return(
        <div className={s.item}>
          { props.message }
          <div>
            <span>Количество лайков: { props.like_count }</span>
          </div>
        </div>
  )
}


export default Post;
