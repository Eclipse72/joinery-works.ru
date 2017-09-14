import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends Component {
	render() {
		return(
			<header>
				<nav>
					<ul>
						{this.props.items.map((item, index) =>
							<li key={index} > <Link to={item.link} > {item.label} </Link></li>
						)}
					</ul>
				</nav>
			</header>
		)
	}
};