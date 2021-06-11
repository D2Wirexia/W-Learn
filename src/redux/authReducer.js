import avatarDmitry from "../library/photo_2020-10-09_11-16-02.jpg";
import presentationPhotoAnna from "../library/Anna.png";
import avatarAnna from "../library/avatarAnna.png";
import {addNewUser} from "./sortReducer";
import presentationPhotoYuri from "../library/yuri.png";

const SING_IN = 'auth/SING_IN'
const LOGOUT = 'auth/LOGOUT'
const REGISTER_NEW_USER = 'auth/REGISTER_NEW_USER'
const SET_MY_STUDENTS = 'auth/SET_MY_STUDENTS'
const REQUEST_CHANGED_PROFILE = 'REQUEST_CHANGED_PROFILE'
const GET_ROOMS_MESSAGE_WITH_ME = 'GET_ROOMS_MESSAGE_WITH_ME'
const SET_SHOW_MESSAGE_WITH_USER_BY_ID = 'SET_SHOW_MESSAGE_WITH_USER_BY_ID'
const ADD_RESULT_TEST_LESSON = 'ADD_RESULT_TEST_LESSON'
const SET_WISH_SUBSCRIBE = 'SET_WISH_SUBSCRIBE'

let initialState = {
	me: null,
	myStudents: null,
	messageWithMe: null,
	showMessageWithUserById: null,
	wishSubscribe: 1,
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SING_IN:
			return {
				...state,
				me: action.profile
			}
		case LOGOUT:
			return {
				...state,
				me: null,
				showMessageWithUserById: null,
				myStudents: null,
				messageWithMe: null
			}
		case REGISTER_NEW_USER:
			return {
				...state,
				me: action.data
			}
		case SET_MY_STUDENTS:
			return {
				...state,
				myStudents: action.allMyStudents
			}
		case REQUEST_CHANGED_PROFILE:
			return {
				...state,
				me: action.profile
			}
		case GET_ROOMS_MESSAGE_WITH_ME:
			return {
				...state,
				messageWithMe: action.messageWithMe
			}
		case SET_SHOW_MESSAGE_WITH_USER_BY_ID:
			return {
				...state,
				showMessageWithUserById: action.id
			}
		case ADD_RESULT_TEST_LESSON:
			return {
				...state,
				me: {...state.me, subscribe: {
					...state.me.subscribe,
						successCourse: action.newSuccessCourse
				}}
			}
		case SET_WISH_SUBSCRIBE:
			return {
				...state,
				wishSubscribe: action.wishSubscribe
			}
		default:
			return state
	}
}
const singIn = (profile) => ({type: SING_IN, profile})
export const logout = () => ({type: LOGOUT})
const registerNewUser = (data) => ({type: REGISTER_NEW_USER, data})
const setMyStudents = (allMyStudents) => ({type: SET_MY_STUDENTS, allMyStudents})
const requestChangedProfile = (profile) => ({type: REQUEST_CHANGED_PROFILE, profile})
const getRoomsMessageWithMe = (messageWithMe) => ({type: GET_ROOMS_MESSAGE_WITH_ME, messageWithMe})
export const setShowMessageWithUserById = (id) => ({type: SET_SHOW_MESSAGE_WITH_USER_BY_ID, id})
export const addResultTestLesson = (newSuccessCourse) => ({type: ADD_RESULT_TEST_LESSON, newSuccessCourse})
export const wishSubscribe = (wishSubscribe) => ({type: SET_WISH_SUBSCRIBE, wishSubscribe})

export const singInThunk = (email, password) => async (dispatch, getState) => {
	const allUsers = getState().sortReducer.users
	const profile = await allUsers.filter(el => el.email.toLowerCase() === email.toLowerCase() && el.password === password)
	dispatch(singIn(profile[0]))
}
export const registerNewUserThunk = (photo, email, password, name, age) => (dispatch, getState) => {
	const allUsers = getState().sortReducer.users
	const newUser = {
		userId:  allUsers.length + 1,
		email: email,
		password: password,
		name: name,
		age: age,
		status: 'student',
		photo: {
			presentationPhoto: null,
			avatar: photo
		},
		language: '',

		teacher: [],
		subscribe: {
			isActive: null,
			typeSubscribe: null,
			startSub: null,
			endSub: null,
			course: [],
			successCourse: [],
			countLessonsSolo: 0,
			countLessonsParty: 0,
			nextLesson: null
		},

	}
	dispatch(registerNewUser(newUser))
	dispatch(addNewUser(newUser))
}
export const setMyStudentsThunk = () => (dispatch, getState) => {
	const me = getState().authReducer.me['userId']
	const allUsers = getState().sortReducer.users
	let arrMyFriends = allUsers.filter(el => el.teacher?.find(i => i === me) === me)
	dispatch(setMyStudents(arrMyFriends))
}
export const requestChangedProfileThunk = () => async (dispatch, getState) => {
	const allUsers = getState().sortReducer.users
	const me = getState().authReducer.me['userId']
	const profile = await allUsers.filter(el => el.userId === me)
	dispatch(requestChangedProfile(profile[0]))
}

export const getRoomsMessageWithMeThunk = () => async (dispatch, getState) =>{
	const message = getState().messageReducer
	const me = getState().authReducer.me['userId']
	const keyRooms =  Object.keys(message).filter(el => el.split('').includes(String(me)))
	let messageWithMe = {}
	keyRooms.forEach(el => messageWithMe[el] = message[el])
	dispatch(getRoomsMessageWithMe(messageWithMe))
}
export default authReducer