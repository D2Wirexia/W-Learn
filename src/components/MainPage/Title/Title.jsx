import React from "react"
import Poster from "./Poster/Poster"
import style from './Title.module.css'
import './../../../css/all.min.css'

const Title = () => {
	return(
		 <div className={style.container}>
		 <Poster />
		 <div className={style.chevron_down}>
			 <i className="fas fa-chevron-down"/>
		 </div>
		 </div>
	)
}

export default Title