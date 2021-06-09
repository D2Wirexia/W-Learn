import React, {useState} from 'react'
import style from './Chat.module.css'
import {useDispatch} from "react-redux"
import {addMessage} from "../../../../redux/messageReducer"
import {getRoomsMessageWithMeThunk} from "../../../../redux/authReducer";

const Chat = ({myId, messageWithMe, showMessageWithUserById, whatShowRoom}) => {
	const dispatch = useDispatch()
	const [textMessage, setTextMessage] = useState('')
	const setNewMessage = () => {
		const message = {
			time: new Date(),
			sender: myId,
			recipient: showMessageWithUserById,
			message: textMessage
		}
		dispatch(addMessage(whatShowRoom, message))
		dispatch(getRoomsMessageWithMeThunk())
		setTextMessage('')
	}
	return (
		 <div className={style.container}>
			 {messageWithMe[whatShowRoom] && messageWithMe[whatShowRoom].map(el=> <div key={el.time} className={style.simpleMessage}>
				 {el.sender === myId && <div className={style.sender}>
					 <div className={style.text}>{el.message}</div>

				 </div>}
				 {el.recipient === myId && <div className={style.recipient}>
					 <div className={style.text}>{el.message}</div>
					 </div>}
			 </div> )}
			 <div className={style.inputSendMessage}>
				 <textarea value={textMessage} onChange={e => setTextMessage(e.target.value)} placeholder='Введите сообщение'/>
				 <button onClick={()=>setNewMessage()}>Send</button>
			 </div>
		 </div>
	)
}
export default Chat;