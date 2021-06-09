import React, {useState} from "react";
import style from './Login.module.css'
import useInput from "../customHook/useInput/useInput";
import {useDispatch, useSelector} from "react-redux";
import {singInThunk} from "../../redux/authReducer";
import {NavLink, Redirect} from "react-router-dom";

const Login = () => {
    const [isActiveLogin, setIsActiveLogin] = useState(false)
    const myAcc = useSelector(state => state.authReducer.me)
    const dispatch = useDispatch()
    const url = "https://images.pexels.com/photos/2425664/pexels-photo-2425664.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    const email = useInput('')
    const password = useInput('')
    if (myAcc) return <Redirect to={'/profile/' + myAcc.userId}/>
    return (
        <div className={style.form}>
            <div className={style.backgroundLogin}>
                <img src={url} alt="backgroundLogin"/>
            </div>
            <div className={style.inputForm}>
                <h1>Login</h1>
                {isActiveLogin && <div className={style.error}>Не верно указан e-mail или пароль</div>}
                <div style={{position: 'absolute', bottom: '60px'}}>
                    <div className={style.input_container}>
                        <input {...email} placeholder='E-mail'/>
                    </div>
                    <div className={style.input_container}>
                        <input {...password} placeholder='Password'/>
                    </div>

                    <div className={style.reg}>
                        <NavLink to='/registration'>Регистрация </NavLink>
                    </div>

                    <div>
                        <button className={style.btn}
                                onClick={() => {
                                    dispatch(singInThunk(email.value, password.value))
                                    setIsActiveLogin(true)
                                }}>Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login