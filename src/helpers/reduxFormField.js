import {Field} from "redux-form";
import React from "react";
import style from './reduxFormField.module.css'

export const reduxFormField = (placeholder, name, ...props) => {
	return (
		 <div className={style.inputBlock}>
			 <label>{placeholder}</label>
			 <Field placeholder={placeholder} component="input" name={name} {...props}/>
		 </div>
	)
}