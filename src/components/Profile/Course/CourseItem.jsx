import React from 'react';
import style from './Course.module.css'
import './../../../css/all.min.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {swapCategoryToCourseThunk} from "../../../redux/courseReducer";

const CourseItem = ({item, index, myAccount, language, course, successCourse, showNowCourse}) => {
	const dispatch = useDispatch()
	return (
		 <div className={myAccount.status === 'student' && !(index === 0 || successCourse[showNowCourse][index - 1] >= 80) ? style.itemBlock : style.item}>
			 <NavLink to={(myAccount.status === 'student' && (index === 0 || successCourse[showNowCourse][index - 1] >= 80))
				 ? `/profile/my_course/${language}/${index + 1}`
			 : myAccount.status === 'teacher' && `/profile/my_course/${language}/${index + 1}`}>
				 <div>{index + 1}. {item.title}</div>
				 {myAccount.status === 'student' && successCourse[showNowCourse][index] && <div>{successCourse[showNowCourse][index]}%</div>}
			 </NavLink>
			 {myAccount.status === 'teacher' && <>
				 <div className={style.change}>
					 <NavLink className={style.navChange}
								 to={`/profile/my_course/change_lesson/${language}/${index + 1}`}>Изменить</NavLink>
				 </div>
				 <div className={style.arrBtnSort}>
					 <div className={style.btnSort}>
						 <button disabled={index === 0}
									onClick={() => dispatch(swapCategoryToCourseThunk(language.toLowerCase(), index, index - 1))}
						 ><i className="fas fa-chevron-up"/></button>
					 </div>
					 <div className={style.btnSort}>
						 <button disabled={index === course.length - 1}
									onClick={() => dispatch(swapCategoryToCourseThunk(language.toLowerCase(), index, index + 1))}
						 ><i className="fas fa-chevron-down"/></button>
					 </div>
				 </div>
			 </>}
			 {myAccount.status === 'student' && <div className={style.lock}>
				 {index === 0 || successCourse[showNowCourse][index - 1] >= 80
					 ? <i className="fas fa-lock-open"/>
					 : <i className="fas fa-lock"/>
				 }
			 </div>}
		 </div>
	)
}
export default CourseItem;