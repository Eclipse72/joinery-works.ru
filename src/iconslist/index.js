import React from 'react'
import { NavLink } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import 'font-awesome/css/font-awesome.css'
import './style.css'

const IconsList = () => {
	return(
		<div className="icons-item text-white">
			<NavLink to="#"><FontAwesome name="instagram" /></NavLink>
			<NavLink to="#"><FontAwesome name="vk" /></NavLink>
		</div>
	)
}

export default IconsList