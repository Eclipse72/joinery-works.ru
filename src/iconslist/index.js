import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import 'font-awesome/css/font-awesome.css'
import './style.css'

const IconsList = () => {
	return(
		<div className="icons-item">
			<Link to="#"><FontAwesome name="instagram" /></Link>
			<Link to="#"><FontAwesome name="vk" /></Link>
		</div>
	)
}

export default IconsList