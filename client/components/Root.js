import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'

import TaskList from './TaskList'
import Categories from './Categories'

class Root extends Component {
  render() {
    return (
      <div>
        <nav>
          <button type="button">
            <Link to="/">Home</Link>
          </button>

          <button type="button">
            <Link to="/tasks">Tasks</Link>
          </button>

          <button type="button">
            <Link to="/categories">Categories</Link>
          </button>
        </nav>

          <h1>MY TODO LIST</h1>

        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/categories" component={Categories} />
      </div>
    )
  }
}

export default Root
