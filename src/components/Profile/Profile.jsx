import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return(
    <div className={s.content}>
      <div>
         <img src='https://dogtricks.ru/wp-content/uploads/2015/11/mops-v-rozovom.jpg'></img>
      </div>
      <div>
        ava+description
      </div>
        <MyPosts />
    </div>
  )
}


export default Profile;
