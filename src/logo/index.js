import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css';

const Logo = props => {
	return(
		<NavLink to="/" className="logo-img">JoineryWorks</NavLink>
	)
}

export default Logo