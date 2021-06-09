import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './UserChat.module.css'
import {setShowMessageWithUserById} from "../../../../redux/authReducer";

const UserChat = ({userWhoMessageWithMe, showMessageWithUserById}) => {
	const dispatch = useDispatch()
	const allUser = useSelector(state => state.sortReducer.users)
	return(
		 <div className={style.container}>
			 {userWhoMessageWithMe && userWhoMessageWithMe.map((el, i)=> <div key={el}>
				 {allUser.map(item => item.userId === Number(el) && <div key={item.userId}
																		 className={showMessageWithUserById === Number(el) ? style.dialogActiveUser : style.dialogUser}
				 onClick={()=> dispatch(setShowMessageWithUserById(Number(el)))}>
					 <div className={style.dialogUserPhoto} >
					 <img src={item.photo.avatar} alt='ava'/>
					 </div>
					 <div className={style.dialogUserName}>{item.name}</div>
				 </div>)}
			 </div> )}
		 </div>
	)
}
export default UserChat;