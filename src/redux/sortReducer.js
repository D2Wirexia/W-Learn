import {users} from './Users'
import {requestChangedProfileThunk, setMyStudentsThunk} from "./authReducer";

const GET_STUDENTS = 'sort/GET_STUDENTS'
const GET_TEACHERS = 'sort/GET_TEACHERS'
const CHANGE_SETTINGS_PROFILE = 'CHANGE_SETTINGS_PROFILE'
const SET_SUBSCRIBE = 'SET_SUBSCRIBE'
const NEW_USER = 'NEW_USER'
const SET_WISH_LESSON = 'SET_WISH_LESSON'

let initialState = {
	users: users,
	students: null,
	teachers: null,
}
const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STUDENTS:
			return {
				...state,
				students: action.students
			}
		case GET_TEACHERS:
			return {
				...state,
				teachers: action.teachers
			}
		case CHANGE_SETTINGS_PROFILE:
			return {
				...state,
				users: state.users.map(el => {
					if (el.userId === action.id) {
						return {
							...el,
							name: action.name,
							age: action.age,
							password: action.password ? action.password : el.password,
							photo: {...el.photo, avatar: action.photo}
						}
					}
					return el
				})
			}
		case SET_SUBSCRIBE:
			return {
				...state,
				users: state.users.map(el => {
					if (el.userId === action.id) {
						return {
							...el,
							teacher: [...el.teacher, action.teacher],
							subscribe: {
								...el.subscribe,
								successCourse: [...el.subscribe.successCourse, []],
								course: action.course !== null ? [...el.subscribe.course, action.course] : [...el.subscribe.course],
								[action.typeLessonKey]: Number(el.subscribe[action.typeLessonKey]) + Number(action.lessons),
								...action.subscribe
							}
						}
					}
					return el
				})
			}
		case NEW_USER:
			return {
				...state,
				users: [...state.users, action.data]
			}
		case SET_WISH_LESSON:
			return {
				...state,
				users:  state.users.map(el => {
					if (el.userId === action.id) {
						return {
							...el,
							subscribe: {
								...el.subscribe,
								[action.typeLessonKey]: Number(el.subscribe[action.typeLessonKey]) + Number(action.lessons),
							}
						}
					}
					return el
				})
			}
		default:
			return state
	}
}
const getStudents = (students) => ({type: GET_STUDENTS, students})
const getTeachers = (teachers) => ({type: GET_TEACHERS, teachers})
const changeSettingsProfile = (id, photo, name, age, password) => ({
	type: CHANGE_SETTINGS_PROFILE,
	id, photo, name, age, password
})
const setSubscribe = (id, subscribe, teacher, course, lessons, typeLessonKey) => ({
	type: SET_SUBSCRIBE, id, subscribe, teacher, course, lessons, typeLessonKey})
export const addNewUser = (data) => ({type: NEW_USER, data})
const setWishLessons = (id, typeLessonKey, lessons) => ({type: SET_WISH_LESSON, id, typeLessonKey, lessons})


export const filterUsers = () => (dispatch, getState) => {
	const allUsers = getState().sortReducer.users
	dispatch(getStudents(allUsers.filter(el => el.status === 'student')))
	dispatch(getTeachers(allUsers.filter(el => el.status === 'teacher')))
}
export const changeSettingsProfileThunk = (photo, name, age, password) => (dispatch, getState) => {
	const me = getState().authReducer.me.userId
	dispatch(changeSettingsProfile(me, photo, name, age, password))
	dispatch(filterUsers())
	dispatch(setMyStudentsThunk)
}
export const setSubscribeThunk = (typeSubscribe, course, lessons, typeLesson) => (dispatch, getState) => {
	const me = getState().authReducer.me.userId
	const typeLessonKey = typeLesson === 'Индивидуальное' ? 'countLessonsSolo' : 'countLessonsParty'

	const nowDate = Date()
	//const endDate = nowDate.setMonth(nowDate.getMonth() + typeSubscribe)
	const subscribe = course !== '' && {
		isActive: true,
		typeSubscribe: typeSubscribe,
		startSub: nowDate,
		endSub: typeSubscribe,
	}
	const teacher = course === 'English' ? 2 : 3
	dispatch(setSubscribe(me, subscribe, teacher, course ? course : null, lessons, typeLessonKey))
	dispatch(requestChangedProfileThunk())
}
export const setWishLessonsThunk = (typeLesson, bonusLesson) => (dispatch, getState) => {
	const me = getState().authReducer.me.userId
	const typeLessonKey = typeLesson === 'Индивидуальное' ? 'countLessonsSolo' : 'countLessonsParty'
	dispatch(setWishLessons(me, typeLessonKey, bonusLesson))
	dispatch(requestChangedProfileThunk())
}

export default sortReducer