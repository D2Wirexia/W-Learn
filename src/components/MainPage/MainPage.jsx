import React from "react"
import Title from "./Title/Title"
import Teacher from "./Teachers/Teachers";
import Subscribe from "./Subscribe/Subscribe";
import Header from "../Header/Header";

const MainPage = () => {
	return(
		 <>
			 <Header/>
		 <Title />
		 <Teacher />
		 <Subscribe />
		 </>
	)
}

export default MainPage