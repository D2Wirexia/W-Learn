import React, {useEffect, useState} from "react";
import style from './ItemsStudents.module.css'
import {useDispatch, useSelector} from "react-redux";
import useInput from "../../../customHook/useInput/useInput";
import {NavLink} from "react-router-dom";
import {setShowMessageWithUserById} from "../../../../redux/authReducer";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import ContentPopup from "./ContentPopup/ContentPopup";

const ItemsStudents = ({myAccount}) => {
    const dispatch = useDispatch()
    const myStudents = useSelector(state => state.authReducer.myStudents)
    const [student, setStudent] = useState(myStudents)
    useEffect(()=>setStudent(myStudents),[myStudents])
    const searchStudentByName = useInput('')
    const adjustingStudents = () => {
        let searchStudent = [...myStudents].filter(el => el['name'].toLowerCase().includes(searchStudentByName.value.toLowerCase()))
        setStudent(searchStudent)
    }
    return (
        <div className={style.container}>
            <div className={style.head}>
                <div className={style.title}>Ваши студенты</div>
                <div className={style.search}>
                    <input {...searchStudentByName} placeholder='Search'/>
                    <button onClick={() => adjustingStudents()}>Search</button>
                </div>
            </div>
            <div className={style.itemsStudents}>
                {student.map(el => <div key={el.userId} className={style.item}>
                    <div className={style.photo}>
                        <img src={el.photo.avatar} alt='ava'/>
                    </div>
                    <div className={style.name}>{el.name}</div>
                    <div className={style.detals}>
                        <Popup trigger={<div> Детальней</div>} modal nested>
                            {close => (<div className={style.modal}>
                                <button className={style.close} onClick={close}>&times; </button>
                               <ContentPopup element={el} lang={myAccount.language}/>
                            </div>)}
                        </Popup>
                    </div>
                    <div className={style.btnMessage}>
                        <NavLink to='/profile/message'>
                            <button onClick={() => dispatch(setShowMessageWithUserById(el.userId))}>Написать</button>
                        </NavLink>
                    </div>
                </div>)}
                {student.length === 0 && <h1>У вас нету студентов</h1>}
            </div>
        </div>
    )
}

export default ItemsStudents