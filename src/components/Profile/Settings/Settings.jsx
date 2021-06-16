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
        dispatch(changeSettingsProfileThunk(photo, nameInput.value, ageInput.value, passwordInput.value))
        dispatch(requestChangedProfileThunk())
    }
    const loadPhoto = (e) => {
        const files = e.target.files
        const reader = new FileReader()
        reader.onload = ev => {
            setPhoto(ev.target.result)
        }
        reader.readAsDataURL(files[0])
    }

    return (
        <div className={style.container}>
            <h1>Settings</h1>
            <div className={style.flexBlock}>
                <div className={style.youPhoto}>
                    <img src={photo} alt="ava"/>
                </div>
                <div className={style.forma}>

                    <span>Аватарка</span>
                    <div className={style.loadImg}>
                        <textarea {...avaInput}/>
                        <input onChange={loadPhoto} type='file'/>
                    </div>

                    <div className={style.formaInput}>
                        <span>Имя</span>
                        <input {...nameInput} placeholder='Your name'/>
                    </div>
                    <div className={style.formaInput}>
                        <span>Возраст</span>
                        <input {...ageInput} placeholder='Your age' type='number'/>
                    </div>
                    <div className={style.formaInput}>
                        <span>Новый пароль</span>
                        <input {...passwordInput} placeholder='New password' type='password'/>
                    </div>
                </div>
            </div>
            <div className={style.saveSettings}>
                <button onClick={() => sendChangedProfileToServer()}>Save</button>
            </div>
        </div>
    )
}
export default Settings;