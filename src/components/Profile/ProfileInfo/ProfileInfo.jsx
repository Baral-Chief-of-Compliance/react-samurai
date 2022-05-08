import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return(
    <div>
      <div>
         <img src='https://dogtricks.ru/wp-content/uploads/2015/11/mops-v-rozovom.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  )
}


export default ProfileInfo;
