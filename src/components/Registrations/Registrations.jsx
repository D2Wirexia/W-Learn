import React from "react";
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {reduxFormField} from "../../helpers/reduxFormField";
import style from './Registrations.module.css'
import {registerNewUserThunk} from "../../redux/authReducer";

const Registrations = () => {
	const dispatch = useDispatch()
	const defaultPhoto = 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'
	const myAccount = useSelector(state => state.authReducer.me)
	const onSubmit = (formData) => {
		dispatch(registerNewUserThunk(formData.photo, formData.email, formData.password, formData.name, formData.age))
	};

	if (myAccount != null) return <Redirect to={'/profile/' + myAccount.userId}/>;
	return(
		 <div className={style.regForm}>
			 <div className={style.regPhoto}>
			 <img src={defaultPhoto} alt='ava'/>
			 </div>
			 <div className={style.regData}>
		 <ReduxRegistrationsForm onSubmit={onSubmit}/>
			 </div>
		 </div>
	)
}

const RegistrationForm = (props) => {
	return(
		 <form onSubmit={props.handleSubmit}>
			 {reduxFormField('Link on you photo', 'photo')}
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