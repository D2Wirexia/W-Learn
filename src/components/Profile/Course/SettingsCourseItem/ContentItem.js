import React from 'react';

const ContentItem = ({value, keyObj, indexChild, contentBlock, setContentBlock}) => (
	 <input  value={value} placeholder={keyObj}
				onChange={(e)=> {
		 let newContentBlock = contentBlock.concat()
		 newContentBlock[indexChild][keyObj] = e.target.value
		 setContentBlock(newContentBlock)
	 }}/>
);
export default ContentItem;