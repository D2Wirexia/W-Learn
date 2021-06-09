import React from 'react';
import style from './Attribute.module.css'

const FileAttribute = ({file}) => (
	 <div className={style.file}>
		 <iframe
			  src={file}
			  title={'file'}
			  style={{width: '600px', height: '600px' }} frameBorder="0"/>
	 </div>
);
export default FileAttribute;