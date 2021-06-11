import React from 'react';
import SubscribeByCourse from "../../MainPage/Subscribe/SubscribeByCourse";
import SubscribeByLesson from "../../MainPage/Subscribe/SubscribeByLesson";
import style from './MySubscribe.module.css'
import {Redirect} from "react-router-dom";

const MySubscribe = ({myAccount}) => {
    if(myAccount.status === 'teacher') return <Redirect to={'/profile/' + myAccount.userId}/>
    return (
        <div>
            <div>Type subscribe: {myAccount.subscribe && myAccount.subscribe.typeSubscribe ? myAccount.subscribe.typeSubscribe : 0} month
            </div>
            <div>Start subscribe: {myAccount.subscribe && myAccount.subscribe.startSub ? myAccount.subscribe.startSub : 'none'}</div>
            <div>End subscribe: {myAccount.subscribe && myAccount.subscribe.endSub ? myAccount.subscribe.endSub : 'none'}</div>
            <div className={style.container}>
                {(myAccount.subscribe === null || myAccount.subscribe.course.length < 2) &&
                <div style={{transform: 'scale(.6)', marginTop: '-120px'}}><SubscribeByCourse/></div>}
                <div style={{transform: 'scale(.6)', marginTop: '-100px'}}><SubscribeByLesson/></div>
            </div>
        </div>
    )
}

export default MySubscribe;