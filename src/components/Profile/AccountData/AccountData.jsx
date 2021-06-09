import React from "react";
import {useSelector} from "react-redux";
import style from './AccountData.module.css'
import ItemsStudents from "../ProfileTeacher/ItemsStudents/ItemsStudents";

const AccountData = ({myAccount}) => {
	const myStudents = useSelector(state => state.authReducer.myStudents)

	return (
		 <div className={style.container}>
			 <div className={style.profile}>
			 <div className={style.avatar}>
				 <img src={myAccount.photo.avatar} alt="ava"/>
			 </div>
			 <div className={style.info}>
				 <div className={style.name}>{myAccount.name}</div>
				 <div className={style.status}>You status: {myAccount.status}</div>
				 {myAccount.status === 'student' && <div className={style.student}>
					 <div>You subscribe: {myAccount.subscribe && myAccount.subscribe.isActive ? 'active' : 'disabled'}</div>
					 <div>Индивидуальных занятий: {myAccount.subscribe && myAccount.subscribe.countLessonsSolo ? myAccount.subscribe.countLessonsSolo : 0} урок(-ов)</div>
					 <div>Груповых занятий: {myAccount.subscribe && myAccount.subscribe.countLessonsParty ? myAccount.subscribe.countLessonsParty : 0} урок(-ов)</div>
				 </div>}
				 {myAccount.status === 'teacher' && <div className={style.teacher}>
					 <div>Language: {myAccount.language}</div>
					 <div>Count you students: {myStudents.length}</div>
					 <div>Ближайшее занятие: <span>01.02.2021 (19:40)</span></div>
				 </div>}
				 {myAccount.status === 'admin' && <div className={style.admin}>
				 </div>}
			 </div>
			 </div>
			 {myAccount.status === 'teacher' && <ItemsStudents/>}
		 </div>
	)
}
export default AccountData