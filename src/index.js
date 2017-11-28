import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './header'
import Footer from './footer'
import Container from './container'
import Experience from './experience'
import {menu} from './store'

import 'normalize-css'
import './index.css'

const App = () => (
  <div>
    <Header items={menu}/>
    <Main />
    <Footer/>
  </div>
)

const Main = () => (
  <main>
    <Switch>
		<Route exact path='/' render={() => (
			<Container>
				<Experience/>
			</Container>
		)}/>
      <Route path='/about'>
      	<p>О нас</p>
      </Route>
      <Route path='/contacts'>
      	<p>Контакты</p>
      </Route>
    </Switch>
  </main>
)

const Home = () => (
  <div>
    <p>Home!</p>
  </div>
)

ReactDom.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	document.getElementById('root')
)

