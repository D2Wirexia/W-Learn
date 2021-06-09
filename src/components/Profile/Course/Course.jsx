import React from 'react';
import style from './Course.module.css'
import CourseItem from "./CourseItem";
import {useDispatch} from "react-redux";
import {addCategoryToCourse} from "../../../redux/courseReducer";
import './../../../css/all.min.css'

const Course = ({myAccount, course, showNowCourse, setShowNowCourse}) => {
	const dispatch = useDispatch()
	if(!course) return <div className={style.noSub}>Нету подписки</div>
	return (
		 <div className={style.container}>
			 <div className={style.title}>
			 {myAccount.status === 'student' && myAccount.subscribe.course.length > 1 && <div onClick={()=>setShowNowCourse(prev => prev === 0 ? myAccount.subscribe.course.length - 1 : prev - 1)}>
				 <i className="fas fa-arrow-left"/></div>}
			 <h1>{myAccount.language || myAccount.subscribe.course[showNowCourse]}</h1>
			 {myAccount.status === 'student' && myAccount.subscribe.course.length > 1 && <div onClick={()=>setShowNowCourse(prev =>  prev === myAccount.subscribe.course.length - 1 ? 0 : prev + 1)}>
				 <i className="fas fa-arrow-right"/></div>}
			 </div>
			 <div className={style.course}>
				 {course && course.map((el, i) => <CourseItem key={el.title+i}
																item={el}
																course={course}
															  showNowCourse={showNowCourse}
																index={i}
																successCourse={myAccount.subscribe?.successCourse}
																language={myAccount.language || myAccount.subscribe.course[showNowCourse]}
																myAccount={myAccount}/>)}
			 </div>
			 {myAccount.status === 'teacher' && <div className={style.footerBtn}>
				 <button onClick={()=>dispatch(addCategoryToCourse(myAccount.language.toLowerCase()))}>+ Добавить категорию</button>
			 </div>}
		 </div>
	)
}
export default Course;