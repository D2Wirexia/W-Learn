import React, {useEffect, useState} from 'react';
import style from './Settings.module.css'
import useInput from "../../customHook/useInput/useInput";
import {useDispatch} from "react-redux";
import {changeSettingsProfileThunk} from "../../../redux/sortReducer";
import {requestChangedProfileThunk} from "../../../redux/authReducer";

const Settings = ({myAccount}) => {
	const dispatch = useDispatch()
	const avaInput = useInput(myAccount.photo.avatar)
	const nameInput = useInput(myAccount.name)
	const ageInput = useInput(myAccount.age)
	const passwordInput = useInput('')
	const [photo, setPhoto] = useState(myAccount.photo.avatar)
	useEffect(() => setPhoto(avaInput.value), [avaInput.value])

	const sendChangedProfileToServer = () => {
		dispatch(changeSettingsProfileThunk(avaInput.value, nameInput.value, ageInput.value, passwordInput.value))
	dispatch(requestChangedProfileThunk())
	}
	return (
		 <div className={style.container}>
			 <h1>Settings</h1>
			 <div className={style.flexBlock}>
				 <div className={style.youPhoto}>
					 <img src={photo} alt="ava"/>
				 </div>
				 <div className={style.forma}>
					 <div>
						 <span>Аватарка</span>
						 <textarea {...avaInput}/>
					 </div>
					 <div>
						 <span>Имя</span>
						 <input {...nameInput} placeholder='Your name'/>
					 </div>
					 <div>
						 <span>Возраст</span>
						 <input {...ageInput} placeholder='Your age' type='number'/>
					 </div>
					 <div>
						 <span>Новый пароль</span>
						 <input {...passwordInput} placeholder='New password' type='password'/>
					 </div>
				 </div>
			 </div>
			 <div className={style.saveSettings}>
				 <button onClick={()=>sendChangedProfileToServer()}>Save</button>
			 </div>
		 </div>
	)
}
export default Settings;