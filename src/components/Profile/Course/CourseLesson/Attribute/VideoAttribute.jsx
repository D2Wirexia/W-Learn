import React from 'react';
import style from './Attribute.module.css'

const VideoAttribute = ({file}) => {
	return (
		 <div className={style.video}>
			 <iframe width="490" height="320"
						src={file}
					 title={'video'}
						frameBorder="0" allowFullScreen/>
		 </div>
	)
}
export default VideoAttribute;