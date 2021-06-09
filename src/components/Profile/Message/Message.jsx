import React from 'react';
import UserChat from "./UserChat/UserChat";
import {useDispatch, useSelector} from "react-redux";
import Chat from "./Chat/Chat";
import style from './Message.module.css'
import {getUserIdFromMyChat} from "../../../helpers/getUserIdFromMyChat";
import {getRoomsMessageWithMeThunk, setShowMessageWithUserById} from "../../../redux/authReducer";
import {createChatRoom} from "../../../redux/messageReducer";

const Message = ({myAccount}) => {
    const dispatch = useDispatch()
    const showMessageWithUserById = useSelector(state => state.authReducer.showMessageWithUserById)
    const messageWithMe = useSelector(state => state.authReducer.messageWithMe)
    const userWhoMessageWithMe = getUserIdFromMyChat(messageWithMe, myAccount.userId)
     const createKeyRoom = () => {
        const myRoom = Object.keys(messageWithMe).filter(e => e.split('').includes(String(showMessageWithUserById)))
        return myRoom[0]
    }
    if (showMessageWithUserById === null) {
        dispatch(setShowMessageWithUserById(Number(userWhoMessageWithMe[0])))
    }
    if (showMessageWithUserById !== null && !userWhoMessageWithMe.includes(String(showMessageWithUserById))) {
        const keyRoom = String(myAccount.userId + '&' + showMessageWithUserById)
        dispatch(createChatRoom(keyRoom))
        dispatch(getRoomsMessageWithMeThunk())
    }
    return (
        <div className={style.container}>
            <UserChat myId={myAccount.userId} messageWithMe={messageWithMe}
                      showMessageWithUserById={showMessageWithUserById}
                      userWhoMessageWithMe={userWhoMessageWithMe}/>
            <Chat myId={myAccount.userId} messageWithMe={messageWithMe}
                  showMessageWithUserById={showMessageWithUserById}
                  whatShowRoom={createKeyRoom()}/>
        </div>
    )
}
export default Message;