import React from 'react'
import NorthernPic from "./images/northernPic.png"
import SouthernPic from "./images/southernPic.png"


function Hemisphere({latitude}){
	const Position = {
		southern :{
			text: 'you are in southern hemisphere',
			picture: SouthernPic
		},
		northern : {
			text: 'you are in northern hemisphere',
			picture: NorthernPic
		}
	}

	const hemisphere = latitude < 0 ? "southern" : "northern";
	const {text,picture} = Position[hemisphere];
	console.log(latitude)
	return (

			<div className="container">
					<img src={picture} alt="hemisphere" />
					<h1> {text} </h1>
			</div>

);
}

export default Hemisphere;