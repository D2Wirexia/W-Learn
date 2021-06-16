import React, {useState} from "react";
import AccountData from "./AccountData/AccountData";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import style from './Profile.module.css'
import MenuProfile from "./MenuProfile/MenuProfile";
import {getRoomsMessageWithMeThunk, setMyStudentsThunk} from "../../redux/authReducer";
import Course from "./Course/Course";
import CourseLesson from "./Course/CourseLesson/CourseLesson";
import SettingsCourseItem from "./Course/SettingsCourseItem/SettingsCourseItem";
import Settings from "./Settings/Settings";
import Message from "./Message/Message";
import MySubscribe from "./MySubscribe/MySubscribe";
import SubscribeActivation from "./MySubscribe/SubscribeActivation/SubscribeActivation";

const Profile = () => {
	const dispatch = useDispatch()
	const [showNowCourse, setShowNowCourse] = useState(0)
	const myAccount = useSelector(state => state.authReducer.me)
	const englishCourse = useSelector(state => state.courseReducer.english)
	const slovakCourse = useSelector(state => state.courseReducer.slovak)

		if(myAccount){
			dispatch(setMyStudentsThunk())
			dispatch(getRoomsMessageWithMeThunk())
		}


	const chooseCourse = () => {
		if(myAccount.language === 'English' || myAccount.subscribe?.course[showNowCourse] === 'English'){
			return englishCourse
		}
		if(myAccount.language === 'Slovak' || myAccount.subscribe?.course[showNowCourse] === 'Slovak'){
			return slovakCourse
		}

		return null
	}
	if (myAccount === null) return <Redirect to="/login"/>
	return (
		 <>
			 <Header/>
			 <div className={style.content}>
				 <div className={style.nav}>
					 <MenuProfile myAccount={myAccount}/>
				 </div>
				 <div>
					 <Switch>
						 <Route path={'/profile/' + myAccount.userId} render={() => <AccountData myAccount={myAccount}/>}/>
						 <Route exact path="/profile/my_course"
								  render={() => <Course myAccount={myAccount}
														setShowNowCourse={setShowNowCourse}
														showNowCourse={showNowCourse}
																course={chooseCourse()}/>}/>
						 <Route exact path="/profile/my_course/:lesson/:id"
								  render={() => <CourseLesson course={chooseCourse()}
															  myAccount={myAccount}
															  showNowCourse={showNowCourse}
															  successCourse={myAccount.subscribe?.successCourse}/>}/>
						 <Route exact path="/profile/my_course/change_lesson/:lesson/:id"
								  render={() => <SettingsCourseItem
										language={myAccount.language}
										course={myAccount.language === 'English' ? englishCourse :
											 myAccount.language === 'Slovak' ? slovakCourse : null}/>}/>
						 <Route exact path="/profile/message" render={() => <Message myAccount={myAccount}/>}/>
						 <Route exact path="/profile/subscribe" render={() => <MySubscribe myAccount={myAccount}/>}/>
						 <Route exact path="/profile/subscribe/activation" render={() => <SubscribeActivation myAccount={myAccount}/>}/>
						 <Route path="/profile/settings" render={() => <Settings myAccount={myAccount}/>}/>
						 <Route path="/profile/support" render={() => <div/>}/>
					 </Switch>
				 </div>
			 </div>
		 </>
	)
}
export default Profile