import React, {useEffect, useState} from 'react'
import style from './SettingsCourseItem.module.css'
import {getLastLinkIndex} from "../../../../helpers/getLastLinkIndex";
import useInput from "../../../customHook/useInput/useInput";
import {useDispatch} from "react-redux";
import {changeCategoryToCourse, deleteCategoryToCourse} from "../../../../redux/courseReducer";
import {NavLink} from "react-router-dom";
import ContentItem from "./ContentItem";
import './../../../../css/all.min.css'
import {swapperArrayCategory} from "../../../../helpers/swapperArrayCategory";

const SettingsCourseItem = ({language, course}) => {
	const dispatch = useDispatch()
	const [nowLesson, setNowLesson] = useState(getLastLinkIndex(window.location.pathname))
	useEffect(() => setNowLesson(getLastLinkIndex(window.location.pathname)), [])
	const titleInput = useInput(course[nowLesson].title)
	const [contentBlock, setContentBlock] = useState(course[nowLesson].content)
	const deleteItemLinkBlock = (index) => {
		let x = contentBlock.slice()
		x.splice(index, 1)
		setContentBlock(x)
	}
	const addItemLinkBlock = () => {
		const newContentBlock = {
			category: 'name',
			file: '',
			video: '',
			music: '',
			writing: ''
		}
		setContentBlock(prev => [...prev, newContentBlock])
	}
	const saveItemLinkBlock = () => {
		const changedLesson = {
			title: titleInput.value,
			content: contentBlock,
			test: [],
		}
		dispatch(changeCategoryToCourse(language.toLowerCase(), nowLesson, changedLesson))
	}
	const swapItemLinkBlock = (indexNow, indexLater) => {
		const result = swapperArrayCategory([...contentBlock], indexNow, indexLater)
		setContentBlock(result)
	}
	return (
		 <div className={style.container}>
			 <NavLink to="/profile/my_course">
				 <div><i className="fas fa-arrow-circle-left"/>Back</div>
			 </NavLink>
			 <div className={style.arrBtnNav}>
				 <div className={style.btnNav}>
					 <button onClick={() => addItemLinkBlock()}>Add block</button>
				 </div>
				 <div className={style.btnNav}>
					 <button onClick={() => saveItemLinkBlock()}>Save</button>
				 </div>
				 <div className={style.btnNav}>
					 <NavLink to="/profile/my_course">
						 <button
							  onClick={() => dispatch(deleteCategoryToCourse(language.toLowerCase(), nowLesson))}>Delete
						 </button>
					 </NavLink>
				 </div>
			 </div>
			 <div className={style.title}>
				 <span>Name course</span>
				 <input {...titleInput}/>
			 </div>
			 {contentBlock.map((el, indexChild) => <div key={el.title} className={style.linkBlock}>
				 <div className={style.leftPosition}>
					 <div className={style.itemLinkBlock}>
						 <span>Name block</span>
						 <ContentItem indexChild={indexChild} value={el.category} keyObj="category"
										  contentBlock={contentBlock} setContentBlock={setContentBlock}/>
					 </div>
					 <div className={style.itemLinkBlock}>
						 <i className="fas fa-file-pdf"/>
						 <ContentItem indexChild={indexChild} value={el.file} keyObj="file"
										  contentBlock={contentBlock} setContentBlock={setContentBlock}/>
					 </div>
					 <div className={style.itemLinkBlock}>
						 <i className="fas fa-video"/>
						 <ContentItem indexChild={indexChild} value={el.video} keyObj="video"
										  contentBlock={contentBlock} setContentBlock={setContentBlock}/>
					 </div>
					 <div className={style.itemLinkBlock}>
						 <i className="fas fa-music"/>
						 <ContentItem indexChild={indexChild} value={el.music} keyObj="music"
										  contentBlock={contentBlock} setContentBlock={setContentBlock}/>
					 </div>
					 <div className={style.itemLinkBlock}>
						 <i className="fas fa-pen"/>
						 <ContentItem indexChild={indexChild} value={el.writing} keyObj="writing"
										  contentBlock={contentBlock} setContentBlock={setContentBlock}/>
					 </div>
					 <div className={style.deleteItemLinkBlock}>
						 <button onClick={() => deleteItemLinkBlock(indexChild)}>Delete this block
						 </button>
					 </div>
				 </div>
				 <div className={style.rightPosition}>
					 <button disabled={indexChild === 0}
								onClick={() => swapItemLinkBlock(indexChild, indexChild - 1)}>
						 <i className="fas fa-chevron-up"/></button>
					 <button disabled={indexChild === contentBlock.length - 1}
								onClick={() => swapItemLinkBlock(indexChild, indexChild + 1)}>
						 <i className="fas fa-chevron-down"/></button>
				 </div>
			 </div>)}
		 </div>
	)
}
export default SettingsCourseItem;