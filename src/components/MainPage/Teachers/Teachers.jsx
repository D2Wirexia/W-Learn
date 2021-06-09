import React from "react";
import style from './Teacher.module.css'
import {useSelector} from "react-redux";

const Teacher = () => {
	const teacher = useSelector(state => state.sortReducer.teachers)
	return (
		 <div className={style.container}>
			 <div className={style.title}>
				 <h1>Наши преподаватели</h1>
			 </div>
			 {teacher.map((el, i) => <div key={el.userId} className={style.items}>
				 {i % 2 !== 0 && <div className={style.detailsInfo}>
					 <div className={style.name}>{el.name}</div>
					 <div className={style.age}>Возраст: {el.age}</div>
					 <div className={style.teaching}>Преподаватель {
						 el.lesson === 'English' ? 'Английского' :
							  el.lesson === 'Slovak' ? 'Словацкого' : null
					 }</div>
					 <div className={style.aboutMe}>
						 <ul> О себе:
							 {el.aboutMe.map(item => <li key={item}>{item}</li>)}
						 </ul>
					 </div>
				 </div>}
				 <div className={style.presentationPhoto}>
					 <img src={el.photo.presentationPhoto} alt="presentationPhoto"/>
				 </div>
				 {i % 2 === 0 && <div className={style.detailsInfo}>
					 <div className={style.name}>{el.name}</div>
					 <div className={style.age}>Возраст: {el.age}</div>
					 <div className={style.teaching}>Преподаватель {
						 el.lesson === 'English' ? 'Английского' :
							  el.lesson === 'Slovak' ? 'Словацкого' : null
					 }</div>
					 <div className={style.aboutMe}>
						 <ul> О себе:
							 {el.aboutMe.map(item => <li key={item}>{item}</li>)}
						 </ul>
					 </div>
				 </div>}
			 </div>)}
		 </div>
	)
}
export default Teacher