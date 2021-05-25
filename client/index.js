import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import TasksContext from './TasksContext'
import {HashRouter as Router} from 'react-router-dom'

//redux stuff
//import { createStore, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk'
//import reducers from './reducers'


document.addEventListener('DOMContentLoaded', () => {
  render(
    <TasksContext.Provider>
      <Router>
        <App/>
      </Router>
    </TasksContext.Provider>,
    
    document.getElementById('app')
  )
})
