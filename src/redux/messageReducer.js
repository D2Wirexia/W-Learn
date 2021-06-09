const ADD_MESSAGE = 'ADD_MESSAGE'
const CREATE_CHAT_ROOM = 'CREATE_CHAT_ROOM'
let initialState = {
	'2&4': [
		{time: '2021-06-04T12:01:29.075Z', sender: 2, recipient: 4, message: 'Добрый день, Дмитрий!'},
		{time: '2021-06-04T12:01:39.423Z', sender: 4, recipient: 2, message: 'Добрый день!'},
		{time: '2021-06-04T12:01:48.673Z', sender: 2, recipient: 4, message: 'Завтра у нас с вами первое занятие,' +
				 ' просмотрите первый урок "Введение", завтра мы его обсудим'},
		{time: '2021-06-04T12:01:57.394Z', sender: 4, recipient: 2, message: 'Уже просмотрел, жду занятия!)'}
	],
	'3&4': [
		{time: '2021-06-04T12:01:39.423Z', sender: 3, recipient: 4, message: 'Привет'},
		{time: '2021-06-04T12:01:57.394Z', sender: 3, recipient: 4, message: 'Завтра в 14:00 первое занятие, нужно пройти' +
				 ' первый урок'},
		{time: '2021-06-04T12:02:19.967Z', sender: 4, recipient: 3, message: 'Ок'}
	],
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				[action.keyChat]: [...state[action.keyChat], action.message]
			}
		case CREATE_CHAT_ROOM:
			return {
				...state,
				[action.keyRoom]: []
			}
		default: return state
	}
}
export const addMessage = (keyChat, message) => ({type: ADD_MESSAGE, keyChat, message})
export const createChatRoom = (keyRoom) => ({type: CREATE_CHAT_ROOM, keyRoom})
export default messageReducer