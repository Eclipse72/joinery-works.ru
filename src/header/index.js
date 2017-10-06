import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Logo from '../logo'
import Menu from '../menu'
import IconsList from '../iconslist'
import Slider from '../slider'
import Paralax from '../paralax'

import './style.css'

const Header = props => {
	return(
		<header>
			<div className="page-header">
				<Logo />
				<Menu items={props.items} />
				<IconsList />
			</div>
			<Switch>
				<Route exact path='/' component={Slider} />
				<Route component={Paralax} />
			</Switch>
		</header>
	)
}

export default Header