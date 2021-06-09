/*
const initialState = {
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

const test = (stateMessage, id) => {
	const keyRooms =  Object.keys(stateMessage).filter(el => el.split('').includes(String(id)))
	let messageWithMe = {}
	keyRooms.forEach(el => messageWithMe[el] = stateMessage[el])


	const keyUserId = Object.keys(messageWithMe).map(e => e.replace(String(id), '').replace(/&/g, ''))

	return keyUserId
}
console.log(test(initialState, 2));

*/


const initialState =  [
    {
        countLessons: 1,
        cost: 4200,
    },
    {
        countLessons: 3,
        cost: 12500,
    },
    {
        countLessons: 6,
        cost: 25000,
    },
]
const x = 1

const result = initialState.filter(el => el.countLessons === x)[0].cost
console.log(result)