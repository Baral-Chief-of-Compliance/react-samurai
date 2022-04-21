import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return(
    <div className={s.content}>
      <div>
         <img src='https://dogtricks.ru/wp-content/uploads/2015/11/mops-v-rozovom.jpg'></img>
      </div>
      <div>
        ava+description
      </div>
      <div className = {s.posts}>
        My posts
        <div>
          New post
        </div>
        <div className={s.item}>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  )
}


export default Profile;
