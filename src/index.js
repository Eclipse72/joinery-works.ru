import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './header'
import Slider from './slider'
import Footer from './footer'
import {menu} from './store'

import 'normalize-css'

const App = () => (
  <div>
    <Header items={menu}/>
    <Main />
    <Footer/>
  </div>
)

const Home = () => (
  <div>
    <Slider />
    <p>Home</p>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about'>
      	<p>О нас</p>
      </Route>
      <Route path='/contacts'>
      	<p>Контакты</p>
      </Route>
    </Switch>
  </main>
)

ReactDom.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	document.getElementById('root')
)

