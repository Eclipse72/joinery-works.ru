import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import IconsList from '../iconslist'
import Logo from '../logo'
import Menu from '../menu'
import Breadcrumbs from '../breadcrumbs'
import HeaderBackground from '../headerbackground'
import Slider from '../slider'

import './style.css'

const Header = props => {
	return(
		<header className="header-main text-white">
			<div className="nav-top">
				<Logo />
				<Menu items={props.items} />
				<IconsList />
			</div>
			<Switch>
				<Route exact path='/' component={Slider} />
				<Route render={() => (
					<HeaderBackground>
						<Breadcrumbs/>
					</HeaderBackground>
				)}/>
			</Switch>
		</header>
	)
}

export default Header