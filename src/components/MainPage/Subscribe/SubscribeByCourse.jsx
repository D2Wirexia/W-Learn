import React from 'react';
import style from "./Subscribe.module.css";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {wishSubscribe} from "../../../redux/authReducer";

const SubscribeByCourse = () => {
    const dispatch = useDispatch()
    const subscribe = useSelector(state => state.settingsReducer.subscribe)
    return(
        <div className={style.subsribesBlock}>
            {subscribe.map(item => <div key={item.countLessons} className={style.item}>
                <div className={style.countLesson}>{item.countLessons} месяц(а)</div>
                <div className={style.banner}>
                    <img src={item.img} alt="banner"/>
                </div>
                <div className={style.cost}>{item.cost} грн.
                </div>
                <div className={style.arrangeSubscribeBtn}>
                    <NavLink to='/profile/subscribe/activation'>
                        <button onClick={()=>dispatch(wishSubscribe(item.countLessons))}>Оформить</button>
                    </NavLink>
                </div>
            </div>)}
        </div>
    )
}

export default SubscribeByCourse