import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './CourseLesson.module.css'
import './../../../../css/all.min.css'
import FileAttribute from "./Attribute/FileAttribute";
import VideoAttribute from "./Attribute/VideoAttribute";
import MusicAttribute from "./Attribute/MusicAttribute";
import {getLastLinkIndex} from "../../../../helpers/getLastLinkIndex";
import {useDispatch} from "react-redux";
import {addResultTestLesson} from "../../../../redux/authReducer";

const CourseLesson = ({course, successCourse, myAccount, showNowCourse}) => {
	const dispatch = useDispatch()
	const [nowLesson, setNowLesson] = useState(getLastLinkIndex(window.location.pathname))
	useEffect(() => setNowLesson(getLastLinkIndex(window.location.pathname)), [])
	const [step, setStep] = useState(0);
	const addResultTest = () => {
		let mark = prompt('Результат теста')
		const newSuccessCourse = [...successCourse]
		newSuccessCourse[showNowCourse][nowLesson] = mark
		return newSuccessCourse
	}

	return (
		 <div className={style.container}>
			 <NavLink to="/profile/my_course">
				 <div><i className="fas fa-arrow-circle-left"/>Back</div>
			 </NavLink>
			 <h1>{course[nowLesson].title}</h1>
			 <div className={style.chooseStep}>
				 {course[nowLesson].content && course[nowLesson].content.map((el, i) => <div key={el.category} onClick={()=>setStep(i)}>{el.category}</div>)}
			 </div>
			 <div className={style}>
				 {course[nowLesson].content[step]?.file && <FileAttribute file={course[nowLesson].content[step].file}/>}
				 {course[nowLesson].content[step]?.music && <MusicAttribute link={course[nowLesson].content[step].music}/>}
				 {course[nowLesson].content[step]?.video && <VideoAttribute file={course[nowLesson].content[step].video}/>}
			 </div>
			<div className={style.startTestBtn}>
				<button onClick={()=>{
					myAccount.status === 'student' && dispatch(addResultTestLesson(addResultTest()))
				}}>Начать тест</button>
			</div>
		 </div>
	)
}
export default CourseLesson;