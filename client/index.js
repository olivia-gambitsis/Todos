import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import {HashRouter as Router} from 'react-router-dom'
import {TasksProvider} from './TasksContext'

//redux stuff
//import { createStore, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk'
//import reducers from './reducers'


document.addEventListener('DOMContentLoaded', () => {
  render(
    <TasksProvider>
      <Router>
        <App/>
      </Router>
    </TasksProvider>,
    
    document.getElementById('app')
  )
})
