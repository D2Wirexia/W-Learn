import React from "react"
import style from './Subscribe.module.css'
import SubscribeByCourse from "./SubscribeByCourse";
import SubscribeByLesson from "./SubscribeByLesson";

const Subscribe = () => {
	return (
		 <div className={style.container}>
			 <div className={style.title}>
				 <h1>Подписка</h1>
			 </div>
			<SubscribeByCourse/>
			<SubscribeByLesson />
		 </div>
	)
}
export default Subscribe