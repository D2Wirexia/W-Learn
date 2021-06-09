import React from "react";
import style from './MenuProfile.module.css'
import {NavLink} from "react-router-dom";

const MenuProfile = ({myAccount}) => {
	const activeStyle = {
		background: '#6094d8',
		color: '#ffff19',
		boxShadow: 'inset 11px 0 3px #3c3ccd'
	}
	return (
		 <div className={style.container}>
			 <div className={style.blockNav}>
				 <NavLink to={"/profile/" + myAccount.userId} activeStyle={activeStyle}>
					 <span>Profile</span>
				 </NavLink>
			 </div>
			 <div className={style.blockNav}>
				 <NavLink to={"/profile/my_course"} activeStyle={activeStyle}>
					 <span>My course</span>
				 </NavLink>
			 </div>
			 <div className={style.blockNav}>
				 <NavLink to={"/profile/message"} activeStyle={activeStyle}>
					 <span>Message</span>
				 </NavLink>
			 </div>
			 {myAccount.status === 'student' && <div className={style.blockNav}>
				 <NavLink to={"/profile/subscribe"} activeStyle={activeStyle}>
					 <span>Subscribe</span>
				 </NavLink>
			 </div>}
			 <div className={style.blockNav}>
				 <NavLink to="/profile/settings" activeStyle={activeStyle}>
					 <span>Settings</span>
				 </NavLink>
			 </div>
			 <div className={style.blockNav}>
				 <NavLink to="/profile/support" activeStyle={activeStyle}>
					 <span>Support</span>
				 </NavLink>
			 </div>
		 </div>
	)
}
export default MenuProfile