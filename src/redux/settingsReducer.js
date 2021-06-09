import lowSubscribe from './../library/lowSubscribe.png'
import mediumSubscribe from './../library/mediumSubscribe.png'
import highSubscribe from './../library/highSubscribe.png'

let initialState = {
	costLessonSolo: 320,
	costLessonParty: 250,
	subscribe: [
		{
			countLessons: 1,
			cost: 4200,
			img: lowSubscribe,
		},
		{
			countLessons: 3,
			cost: 12000,
			img: mediumSubscribe,
		},
		{
			countLessons: 6,
			cost: 23500,
			img: highSubscribe,
		},
	]
}

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state
	}
}

export default settingsReducer