import React, {useEffect, useState} from "react";
import style from './Header.module.css'
import logo from '../../library/logo.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = () => {
	const dispatch = useDispatch()
	const myAccount = useSelector(state => state.authReducer.me)

	const [url, setUrl] = useState(window.location.pathname.split('/')[1])
	useEffect(()=>setUrl(window.location.pathname.split('/')[1]), [])
	return (
		 <div className={style.container}>
			 <div className={style.header}>
				 <div className={style.logo}>
					 <img src={logo} alt="logo"/>
				 </div>
				 <div className={style.navigations}>
					 {
						 myAccount != null && url === 'profile' ? <div className={style.logout} onClick={()=>dispatch(logout())}>
								  <NavLink to='/'>
									  <div>Logout</div>
									  <i className="fas fa-sign-out-alt"/>
								  </NavLink>
							  </div>
							  : myAccount != null ? <div className={style.myAcc}>
								  <NavLink to={'/profile/' + myAccount.userId}>
									  <div className={style.nameAcc}>{myAccount.name}</div>
									  <div className={style.photoAcc}>
										  <img src={myAccount.photo.avatar} alt='ava' />
									  </div>
								  </NavLink>
							  </div>
							  :  <div className={style.arr_btn_sing}>
								  <NavLink to='/registration'  className={style.btn_sing}>
									  <button onClick={()=>1}>Sign Up</button>
								  </NavLink>
								  <NavLink to='/login' className={style.btn_sing}>
									  <button>Sign In</button>
								  </NavLink>
							  </div>
					 }
					{/* {myAccount == null &&  <div className={style.arr_btn_sing}>
						 <div className={style.btn_sing}>
							 <button onClick={()=>1}>Sign Up</button>
						 </div>
						 <NavLink to='/login' className={style.btn_sing}>
							 <button>Sign In</button>
						 </NavLink>
					 </div>}
					 {myAccount != null &&   <div className={style.logout} onClick={dispatch(logout)}>
						 <NavLink to='/'>
							 <div>Logout</div>
							 <i className="fas fa-sign-out-alt"/>
						 </NavLink>
					 </div>}
					 {myAccount != null &&   <div className={style.myAcc}>
						 <NavLink to='/profile'>
						<div className={style.nameAcc}>{myAccount.name}</div>
						 <div className={style.photoAcc}>
							 <img src={myAccount.photo.avatar} alt='ava' />
						 </div>
						 </NavLink>
					 </div>}*/}
					 <div className={style.menu}>
						 <div className={style.menu_element}>
							 <NavLink exact to="/" activeClassName={style.active}>
								 Главная
							 </NavLink>
						 </div>
						 <div className={style.menu_element}>
							 <NavLink to="/about_school" activeClassName={style.active}>
								 О школе
							 </NavLink>
						 </div>
						 <div className={style.menu_element}>
							 <NavLink to="/warranty" activeClassName={style.active}>
								 Гарантии
							 </NavLink>
						 </div>
						 <div className={style.menu_element}>
							 <NavLink to="/speaking" activeClassName={style.active}>
								 Speaking
							 </NavLink>
						 </div>
						 <div className={style.menu_element}>
							 <NavLink to="/contacts" activeClassName={style.active}>
								 Контакты
							 </NavLink>
						 </div>
					 </div>
				 </div>
			 </div>
			 <div className={style.downLine}/>
		 </div>
	)
}
export default Header