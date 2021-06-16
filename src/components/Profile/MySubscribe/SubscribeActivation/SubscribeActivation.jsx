import React, {useEffect, useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import style from './SubscribeActivation.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getTotalCost} from "../../../../helpers/saleSubscribe";
import {setSubscribeThunk, setWishLessonsThunk} from "../../../../redux/sortReducer";
import {getChoiceValueSubscribeLesson} from "../../../../helpers/choiceValueSubscribeLesson";

const SubscribeActivation = ({myAccount}) => {
    const dispatch = useDispatch()
    const costLessonSolo = useSelector(state => state.settingsReducer.costLessonSolo)
    const costLessonParty = useSelector(state => state.settingsReducer.costLessonParty)
    const subscribeState = useSelector(state => state.settingsReducer.subscribe)
    const wishSubscribe = useSelector(state => state.authReducer.wishSubscribe)
    const [valueLanguage, setValueLanguage] = useState('')
    const [valueDuration, setValueDuration] = useState(wishSubscribe)
    const [valueCostCourse, setValueCostCourse] = useState(null)
    const [countBonusLesson, setCountBonusLesson] = useState(getChoiceValueSubscribeLesson().countLess)
    const [bonusLessonCheckBox, setBonusLessonCheckBox] = useState(getChoiceValueSubscribeLesson().isCheck)
    const [typeLesson, setTypeLesson] = useState(getChoiceValueSubscribeLesson().view)
    const [getSubscribeMonth, setGetSubscribeMonth] = useState(true)
    useEffect(()=>{
        myAccount.subscribe.course.length === 2 && setGetSubscribeMonth(false)
    }, [myAccount.subscribe.course.length])
    const costBonusLessons = getTotalCost(Number(countBonusLesson), typeLesson === 'Индивидуальное' ? costLessonSolo : costLessonParty)
    useEffect(() => {
        const result = [...subscribeState].filter(el => Number(el.countLessons) === Number(valueDuration))
        setValueCostCourse(result[0].cost)
    }, [subscribeState, valueDuration])
    const pushSubscribeOnUser = () => {
        dispatch(setSubscribeThunk(valueDuration, valueLanguage, countBonusLesson, typeLesson))
    }
    const [formBtnIsActive, setFormBtnIsActive] = useState(false)
    const error = {
        color: 'red',
        fontSize: '24px'
    }
    if (myAccount === null) return <Redirect to='/login'/>
    if(myAccount.status === 'teacher') return <Redirect to={'/profile/' + myAccount.userId}/>
    return (
        <div className={style.container}>
            {((!valueLanguage && formBtnIsActive) && getSubscribeMonth) && <div style={error}>Выберите язык курса</div>}
            {(myAccount.subscribe === null || myAccount.subscribe.course.length < 2) && <>
                <div className={style.language}>
                    <div>Виберите курс</div>
                    <select onChange={e => setValueLanguage(e.target.value)}>
                        <option selected={true} disabled="disabled">Виберите язык курса</option>
                        {myAccount.subscribe !== null && myAccount.subscribe.course.includes('English') ? null :
                            <option value='English'>English</option>}
                        {myAccount.subscribe !== null && myAccount.subscribe.course.includes('Slovak') ? null :
                            <option value='Slovak'>Slovak</option>}
                    </select>
                </div>
                <div>я хочу подписку
                    <input type='checkbox' defaultChecked={getSubscribeMonth}
                           onChange={e => setGetSubscribeMonth(e.target.checked)}/>
                </div>
                {getSubscribeMonth && <>
                    <div className={style.duration}>
                        <div>Виберите длительность курса</div>
                        <select onChange={e => setValueDuration(e.target.value)} defaultValue={valueDuration}>
                            <option value={1}>1 month</option>
                            <option value={3}>3 month</option>
                            <option value={6}>6 month</option>
                        </select>
                    </div>
                    <div className={style.cost}>Стоимость: {valueCostCourse} грн.</div>
                </>}
            </>}
            <div className={style.bonusLessons}>
                <h3>Заказать дополнительное занятие
                    <input onChange={e => setBonusLessonCheckBox(e.target.checked)} defaultChecked={bonusLessonCheckBox}
                           type='checkbox'/>
                </h3>
                {bonusLessonCheckBox && <>
                    <div>Тип заняти</div>
                    <select onChange={e => setTypeLesson(e.target.value)} defaultValue={typeLesson}>
                        <option value='Индивидуальное'>Индивидуальное</option>
                        <option value='Груповое'>Груповое</option>
                    </select>
                    <div>Количесво</div>
                    <input value={countBonusLesson}
                           onChange={e => setCountBonusLesson(e.target.value < 0 ? 0 : e.target.value)} type='number'/>
                    <div className={style.cost}>Стоимость: {costBonusLessons} грн.</div>
                </>}
            </div>

            {((myAccount.subscribe === null || myAccount.subscribe.course.length < 2)) && getSubscribeMonth && bonusLessonCheckBox &&
            <div
                className={style.cost}>Всего: {(getSubscribeMonth && valueCostCourse) + (bonusLessonCheckBox && costBonusLessons)} грн.</div>}
            <div className={style.arrangeSubscribeBtn}>
                <NavLink to={valueLanguage && getSubscribeMonth ? '/profile/my_course' : !getSubscribeMonth ? `/profile/${myAccount.userId}` : '/profile/subscribe/activation'}>
                    <button onClick={() => {
                        setFormBtnIsActive(true)
                        if (valueLanguage || !getSubscribeMonth) {
                            if ((myAccount.subscribe === null || myAccount.subscribe.course.length < 2)) {
                                pushSubscribeOnUser()
                            } else {
                                dispatch(setWishLessonsThunk(typeLesson, countBonusLesson))
                            }
                        }
                    }}>Оформить
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default SubscribeActivation;