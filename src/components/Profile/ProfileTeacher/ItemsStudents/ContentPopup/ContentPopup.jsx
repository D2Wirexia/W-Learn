import React, {useState} from 'react';
import style from './ContentPopup.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from "react-redux";
import {addDateLessonThunk} from "../../../../../redux/sortReducer";

const ContentPopup = ({element, lang}) => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 6;
    };
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };
    const buildConvenientFormatDate = date => {
        const newFormatDate = new Date(date)
        const day = newFormatDate.getDate() < 10 ? '0' + newFormatDate.getDate() : newFormatDate.getDate()
        const month = (newFormatDate.getMonth() + 1) < 10 ? '0' + (newFormatDate.getMonth() + 1) : (newFormatDate.getMonth() + 1)
        const year = newFormatDate.getFullYear()
        return day + '/' + month + '/' + year
    }
    const getResultDate = () => {
        let day = startDate.getDate() < 10 ? '0' + startDate.getDate() : startDate.getDate()
        let month = startDate.getMonth() + 1 < 10 ? '0' + (startDate.getMonth() + 1) : (startDate.getMonth() + 1)
        let year = startDate.getFullYear()
        let hour = startDate.getHours()
        let minute = startDate.getMinutes() < 10 ? '0' + startDate.getMinutes() : startDate.getMinutes()
        return month + '/' + day + '/' + year + ' (' + hour + ':' + minute + ')'
    }
    return (
        <div className={style.content}>
            <div className={style.head}>
                <div className={style.photo}>
                    <img src={element.photo.avatar} alt='ava'/>
                </div>
                <div className={style.rightBlock}>
                    <div className={style.name}>{element.name}</div>
                    <div className={style.subscribe}>
                        <div className={style.title}>Subscribe</div>
                        <div className={style.element}>start</div>
                        <div className={style.element}>end</div>
                        <div className={style.element}>{buildConvenientFormatDate(element.subscribe.startSub)}</div>
                        <div className={style.element}>{buildConvenientFormatDate(element.subscribe.endSub)}</div>
                    </div>
                    <div>Кол. индивидуальных занятий: {element.subscribe.countLessonsSolo}</div>
                    <div>Кол. груповых занятий: {element.subscribe.countLessonsParty}</div>
                    {(element.subscribe.countLessonsSolo > 0 || element.subscribe.countLessonsParty > 0) && <>
                        <div>Следующее занятие: {element.subscribe.nextLesson || 'не указано'}</div>
                        <DatePicker showTimeInput
                                    minDate={new Date()}
                                    timeInputLabel="Time:"
                                    dateFormat="dd/MM/yyyy 'in' HH:mm" timeFormat="HH:mm"
                                    filterDate={isWeekday} filterTime={filterPassedTime}
                                    selected={startDate} onChange={(date) => setStartDate(date)}/>
                        <button onClick={() => dispatch(addDateLessonThunk(element.userId, getResultDate()))}>
                            Назначить занятие
                        </button>
                    </>}
                </div>
            </div>
            <div className={style.resultSuccess}>
                <table>
                    <thead>
                    <tr>
                        <th>lesson</th>
                        <th>success</th>
                    </tr>
                    </thead>
                    <tbody>
                    {element.subscribe.successCourse[element.subscribe.course.indexOf(lang)].length > 0 ? element.subscribe.successCourse[element.subscribe.course.indexOf(lang)].map((item, ind) =>
                            <tr key={item / ind}>
                                <td>{ind + 1}</td>
                                <td>{item}%</td>
                            </tr>)
                        : <tr>
                            <td>_</td>
                            <td>_</td>
                        </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContentPopup;