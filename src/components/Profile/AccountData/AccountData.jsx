import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import style from './AccountData.module.css'
import ItemsStudents from "../ProfileTeacher/ItemsStudents/ItemsStudents";

const AccountData = ({myAccount}) => {
	const myStudents = useSelector(state => state.authReducer.myStudents)
	const getNextLesson = (arr = []) => {
		const date = new Date()
		let comparisonDate = []
		arr.forEach(el => {
			const time = Date.parse(date) - Date.parse(el.subscribe.nextLesson)
			comparisonDate.push(time)
		})
		const sortTime = comparisonDate.filter(el => el < 0)
		const minDate = Math.max.apply(null, sortTime)
		const index = comparisonDate.indexOf(minDate)
		if(typeof index === 'number') return arr[index]?.subscribe.nextLesson
		return null
	}
	useEffect(()=>getNextLesson(myStudents),[myStudents])
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
					 <div>Ближайшее занятие: <span>{(myAccount.subscribe && myAccount.subscribe.nextLesson) || 'нету занятий'}</span></div>
				 </div>}
				 {myAccount.status === 'teacher' && <div className={style.teacher}>
					 <div>Language: {myAccount.language}</div>
					 <div>Count you students: {myStudents.length}</div>
					 <div>Ближайшее занятие: <span>{getNextLesson(myStudents) || 'нету занятий'}</span></div>
				 </div>}
				 {myAccount.status === 'admin' && <div className={style.admin}>
				 </div>}
			 </div>
			 </div>
			 {myAccount.status === 'teacher' && <ItemsStudents myAccount={myAccount}/>}
		 </div>
	)
}
export default AccountData