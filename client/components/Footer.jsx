import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <>
        <footer className="footer">
        <span className="todo-count">item left</span>
        <ul className="filters">
          <li>
            <Link to={'/'}>All</Link>
          </li>
          <li>
            <Link to={'/active'}>Active</Link>
          </li>
          <li>
            <Link to={'/completed'}>Completed</Link>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
        </>
    )
}
