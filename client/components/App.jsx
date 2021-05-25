import React from 'react'
import AddTodo from './AddTodo'
import{Route} from 'react-router-dom'
import Footer from './Footer'
import Main from './Main'

export class App extends React.Component {
 
  componentDidMount () {}

  render () {
    return (
      <>
      
        <AddTodo />
        <Route exact path ='/' component={Main}/>
        <Footer/>
      
    </>
    )
      
  }
}


export default App
