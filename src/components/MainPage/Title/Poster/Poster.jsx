import React, {useEffect, useMemo, useState} from "react"
import style from './Poster.module.css'
import banner from './../../../../library/menu.png'
const Poster = () => {
	const [language, setLanguage] = useState('Английскому')
	const languageWord = useMemo(()=>['Английскому', 'Словацкому'], [])
	useEffect(()=>{
		let index = 0
		setInterval(()=> {
			if(index+1 >= languageWord.length){
				index = 0
			}else{
				index += 1
			}
			setLanguage(languageWord[index])
		}, 2000)
	}, [languageWord])
	return (
		 <div className={style.container}>
			 <div className={style.tagline}>
				 <h1>Мы <span>не</span> проводим курсы!</h1>
				 <h1>Мы учим вас учиться <span className="typing">{language}</span></h1>
				 <div className={style.goTest_btn}>
					 <button onClick={() => 1}>Пройти тест</button>
				 </div>
			 </div>
			 <div className={style.banner}>
				 <img src={banner} alt="banner"/>
			 </div>
			 </div>
	)
}
export default Poster