import React, {useRef, useState} from 'react';
import style from "./Subscribe.module.css";
import {getTotalCost, saleSubscribeLesson} from "../../../helpers/saleSubscribe";
import {useSelector} from "react-redux";
import useInput from "../../customHook/useInput/useInput";
import {NavLink} from "react-router-dom";
import {setChoiceValueSubscribeLesson} from "../../../helpers/choiceValueSubscribeLesson";

const SubscribeByLesson = () => {
    const costLessonSolo = useSelector(state => state.settingsReducer.costLessonSolo)
    const costLessonParty = useSelector(state => state.settingsReducer.costLessonParty)
    const checkTypeSubscribeRef = useRef()
    const [typeSubscribe, setTypeSubscribe] = useState(false)
    const numberOfLessonsEnteredUser = useInput('')
    const onChange = event => setTypeSubscribe(event.target.checked)
    const countOfLessonsEnteredUser = Number(numberOfLessonsEnteredUser.value)
    return(
        <div className={style.chooseCountLessons}>
            <div className={style.wrapper}>
                <input type="checkbox" id="checkbox" className={style.checkbox}
                       ref={checkTypeSubscribeRef} onChange={onChange}/>
                <label htmlFor="checkbox"/>
            </div>
            <h2>Желаемое количество {typeSubscribe ? 'груповых' : 'индивидуальных'} занятий</h2>
            <div className={style.inputBlock}>
                <span>Количесво уроков</span>
                <input {...numberOfLessonsEnteredUser} placeholder="Введите количесво уроков" type='number'/>
            </div>
            <div className={style.arrangeSubscribeBtn}>
                <div className={style.sale}>{numberOfLessonsEnteredUser.value && saleSubscribeLesson(countOfLessonsEnteredUser) > 0 && `экономия ${saleSubscribeLesson(countOfLessonsEnteredUser)}%`}</div>
                <div className={style.cost}>{
                    !typeSubscribe
                        ? getTotalCost(countOfLessonsEnteredUser, costLessonSolo)
                        : getTotalCost(countOfLessonsEnteredUser, costLessonParty)

                } грн.
                </div>
                <NavLink to='/profile/subscribe/activation'>
                <button onClick={()=>setChoiceValueSubscribeLesson(true, numberOfLessonsEnteredUser.value, typeSubscribe ? 'Груповое' : 'Индивидуальное')}>Оформить</button>
                </NavLink>
            </div>
        </div>
    )
}

export default SubscribeByLesson;