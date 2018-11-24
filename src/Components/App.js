import React, {Component, Fragment} from 'react'
import {Header, Footer} from './Layouts/index'
import Exercises from './Exercises'

export default class App extends Component {
  render(){
		  return  <Fragment>
						    <Header />
						    <Exercises />
						    <Footer />
					    </Fragment>
  }
}
