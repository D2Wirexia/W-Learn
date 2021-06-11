import React, {useState} from "react";
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {reduxFormField} from "../../helpers/reduxFormField";
import style from './Registrations.module.css'
import {registerNewUserThunk} from "../../redux/authReducer";

const Registrations = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.sortReducer.users)
    const defaultPhoto = 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'
    const myAccount = useSelector(state => state.authReducer.me)
    const [showError, setShowError] = useState(false)
    const [errorType, setErrorType] = useState('')
    const onSubmit = async (formData) => {
        if (formData.email && formData.password && formData.name) {
        	let isOk = true
            await allUsers.forEach(el => {
                if (el.email === formData.email) {
					isOk = false
                    setErrorType('Такой e-mail уже используется')
                }
            })
			isOk && dispatch(registerNewUserThunk(photo, formData.email, formData.password, formData.name, formData.age))
        } else {
            setErrorType('Обезательно введите E-mail, Password, Name')
        }
        setShowError(true)
    };
    const [photo, setPhoto] = useState(defaultPhoto)
    const loadPhoto = (e) => {
        const files = e.target.files
        const reader = new FileReader()
        reader.onload = ev => {
            setPhoto(ev.target.result)
        }
        reader.readAsDataURL(files[0])
    }

    if (myAccount != null) return <Redirect to={'/profile/' + myAccount.userId}/>;
    return (
        <div className={style.regForm}>
            <div className={style.regPhoto}>
                <img src={photo} alt='ava'/>
            </div>
            <div className={style.regData}>
                <ReduxRegistrationsForm onSubmit={onSubmit} showError={showError}
                                        loadPhoto={loadPhoto} errorType={errorType}/>
            </div>
        </div>
    )
}


const RegistrationForm = (props) => {
    const errorStyle = {
        color: 'red'
    }
    console.log(props.showError)
    console.log(props.errorType)
    return (
        <form onSubmit={props.handleSubmit}>
            {props.showError && props.errorType && <div style={errorStyle}>{props.errorType}</div>}
            <input onChange={props.loadPhoto} type='file'/>
            {reduxFormField('E-mail', 'email')}
            {reduxFormField('Password', 'password')}
            {reduxFormField('Name', 'name')}
            {reduxFormField('Age', 'age')}
            <div className={style.registrButtonForm}>
                <button>Готово!</button>
            </div>
        </form>
    )
}

const ReduxRegistrationsForm = reduxForm({form: 'registration'})(RegistrationForm)

export default Registrations