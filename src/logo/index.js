import React from 'react'
import { Link } from 'react-router-dom'

import './style.css';

const Logo = props => {
	return(
		<Link to="/" className="logo text-white">JoineryWorks</Link>
	)
}

export default Logo