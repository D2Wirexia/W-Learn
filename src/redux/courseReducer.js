import {swapperArrayCategory} from "../helpers/swapperArrayCategory";

const ADD_CATEGORY_TO_COURSE = 'ADD_CATEGORY_TO_COURSE'
const CHANGE_CATEGORY_TO_COURSE = 'CHANGE_CATEGORY_TO_COURSE'
const DELETE_CATEGORY_TO_COURSE = 'DELETE_CATEGORY_TO_COURSE'
const SWAP_CATEGORY_TO_COURSE = 'SWAP_CATEGORY_TO_COURSE'

let initialState = {
	english: [
		{
			title: 'Введение',
			content: [
				{
					category: 'step 1',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: '',
					writing: 'start'
				},
				{
					category: 'step 2',
					file: '',
					video: 'https://youtu.be/isMpyCkKuDU',
					music: '',
					writing: 'middle'
				},
				{
					category: 'step 3',
					file: '',
					video: '',
					music: 'https://bd748f642cf8b253d59c-5c160b94f727c0d27cbeccc854542bc6.ssl.cf1.rackcdn.com/LearnEnglish%20Teens%20-%20Listening%20skills%20practice%20-%20A1%20-%20A%20good%20night\'s%20sleep.mp3',
					writing: 'end'
				}
			],
			test: [],
		},
		{
			title: 'Времена',
			content: [
				{
					category: 'step 1',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: 'https://www.youtube.com/embed/4rLEA7oG6yg',
					music: 'https://sefon.pro/api/mp3_download/direct/99233/3vUCAAExGp334kAt5xfM3GP2VzTl3IIdV4xAMoJPVLCK4j8j78i9Haw5vkeMYKJ-arPfYgPVqWBbyTbcr-IQ4OBFq7-IMMDoHxHDgmj3Rzw4D1qVmwNhVJfxbw0XOqBhAlqk_Fh0mVrtNbSG4CW-myHZk3cMat6g1N1qvA/',
					writing: 'start'
				},
				{
					category: 'step 2',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: 'https://www.youtube.com/embed/UdLX91MyiMI',
					music: 'https://sefon.pro/api/mp3_download/direct/99241/3vUCAGI_HTaFowVnvwI1yX8D4SVjdvEmGtklZkK35dNFWEsYWtWHxrwg3orDjvBOLJFHj06R2tX5Fzb2hujUCDTY709VnLLgJsuKLQHwqlSER4P49A7ERf1z2CCjonOscoNsml2b1yINuukMQDORZxPMZO4XENGvGnjvdQ/',
					writing: 'middle'
				},
				{
					category: 'step 3',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: 'https://www.youtube.com/embed/9P1Uk0Is-u4',
					music: 'https://sefon.pro/api/mp3_download/direct/99223/3vUCAPabNiq2kZQ-jXDM0W7bAm06Xe7irDNimFeUNwyKySaOk0UvPKP_qO3vtmd-fz8-yUF4GIHWWlIbjW0oI081bMztc2y9zPgAl3HZ6c5ti0edk2MEGOY3KEMEp0534AqjVjyPv0M_ZOH_7xqkHaXWDrjPVC57bvfD6g/',
					writing: 'end'
				}
			],
			test: [
			],
		},
		{
			title: 'Глаголы',
			content: [
				{
					category: 'step 1',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: 'https://www.youtube.com/embed/4rLEA7oG6yg',
					music: 'https://sefon.pro/api/mp3_download/direct/99233/3vUCAAExGp334kAt5xfM3GP2VzTl3IIdV4xAMoJPVLCK4j8j78i9Haw5vkeMYKJ-arPfYgPVqWBbyTbcr-IQ4OBFq7-IMMDoHxHDgmj3Rzw4D1qVmwNhVJfxbw0XOqBhAlqk_Fh0mVrtNbSG4CW-myHZk3cMat6g1N1qvA/',
					writing: 'one'
				},
				{
					category: 'step 2',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: 'https://www.youtube.com/embed/4rLEA7oG6yg',
					music: 'https://sefon.pro/api/mp3_download/direct/99233/3vUCAAExGp334kAt5xfM3GP2VzTl3IIdV4xAMoJPVLCK4j8j78i9Haw5vkeMYKJ-arPfYgPVqWBbyTbcr-IQ4OBFq7-IMMDoHxHDgmj3Rzw4D1qVmwNhVJfxbw0XOqBhAlqk_Fh0mVrtNbSG4CW-myHZk3cMat6g1N1qvA/',
					writing: 'two'
				},
			],
			test: [],
		},
		{
			title: 'Пасив & Актив',
			content: [
				{
					category: 'step 1',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: 'https://megapesni.cc/get/Rk2ycVd4W1ZGPkpgy9H8tQ/1622679153/7b59fb03/2017/01/Imagine%20Dragons%20-%20Believer.mp3',
					writing: 'one'
				},
				{
					category: 'step 2',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: 'https://megapesni.cc/get/cqR6rQFhhq1nB0YmmsQzfw/1622679246/b55cd6fa/2018/11/Imagine%20Dragons%20-%20Digital.mp3',
					writing: 'two'
				},
				{
					category: 'step 3',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: 'https://megapesni.cc/get/yUgZm2N4qHfIXyyWNAVUcA/1622679259/7b7d7887/2017/04/Imagine%20Dragons%20-%20Thunder.mp3',
					writing: 'two'
				},
				{
					category: 'step 4',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: 'https://megapesni.cc/get/WwRDQtDUv98CDYQ5KC96yQ/1622679270/7b3fcdd2/2016/10/Imagine%20Dragons%20-%20Demons.mp3',
					writing: 'two'
				},
				{
					category: 'step 5',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: 'https://megapesni.cc/get/T1kWx_bKUg99NfiBbOQ4Bw/1622679291/785d4940/2014/09/Imagine%20Dragons%20-%20Warriors.mp3',
					writing: 'two'
				},
				{
					category: 'step 6',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: '',
					writing: 'two'
				},
			],
			test: [],
		},
		{
			title: 'Хелперы',
			content: [
				{
					category: 'step 1',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: '',
					writing: 'two'
				},
				{
					category: 'step 2',
					file: 'http://www.africau.edu/images/default/sample.pdf',
					video: '',
					music: '',
					writing: 'two'
				},
			],
			test: [],
		},
	],
	slovak: [
		{
		title: 'Хелперы',
		content: [
			{
				category: 'step 1',
				file: 'http://www.africau.edu/images/default/sample.pdf',
				video: '',
				music: '',
				writing: 'two'
			},
			{
				category: 'step 2',
				file: 'http://www.africau.edu/images/default/sample.pdf',
				video: '',
				music: '',
				writing: 'two'
			},
		],
		test: [],
	},
	]
}

const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY_TO_COURSE:
			return {
				...state,
				[action.course]: [...state[action.course], {title: 'New category', content: [], test: []}]
			}
		case DELETE_CATEGORY_TO_COURSE:
			return {
				...state,
				[action.course]: state[action.course].filter((_, i) => i !== action.lesson)
			}
		case CHANGE_CATEGORY_TO_COURSE:
			return {
				...state,
				[action.course]: state[action.course].map((el, i) => {
					if(i === action.nowLesson) return action.lesson
					return el
				})
			}
		case SWAP_CATEGORY_TO_COURSE:
			return {
				...state,
				[action.course]: action.newCategory
			}
		default: return state
	}
}
export const addCategoryToCourse = (course) => ({type: ADD_CATEGORY_TO_COURSE, course})
export const deleteCategoryToCourse = (course, lesson) => ({type: DELETE_CATEGORY_TO_COURSE, course, lesson})
export const changeCategoryToCourse = (course, nowLesson, lesson) => ({type: CHANGE_CATEGORY_TO_COURSE, course, nowLesson, lesson})
const swapCategoryToCourse = (course, newCategory) => ({type: SWAP_CATEGORY_TO_COURSE, course, newCategory})

export const swapCategoryToCourseThunk = (course, indexNow, indexLater) => async (dispatch, getState) => {
	const stateCourse = await [...getState().courseReducer[course]]
	const result = swapperArrayCategory(stateCourse, indexNow, indexLater)
	dispatch(swapCategoryToCourse(course, result))
}

export default courseReducer