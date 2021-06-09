import React, {useEffect, useState} from 'react';
import style from './Attribute.module.css'
const MusicAttribute = React.memo(({link}) => {
	const [file, setFile] = useState(link)
	useEffect(()=>setFile(link), [link])
	return(
		 <div className={style.music}>
			 <audio controls style={{width: '600px'}} src={file}>
				 <source type="audio/mp3"/>
			 </audio>
			 </div>
	)
})
export default MusicAttribute;