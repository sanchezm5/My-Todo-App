import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'

import {
  TaskList,
  Categories,
  SingleCategory,
  SingleTask,
} from '../components'

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

          <h1>MY TO-DO APP</h1>

        <Route exact path="/tasks" component={TaskList} />
        <Route path="/tasks/:taskId" component={SingleTask} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/categories/:categoryId" component={SingleCategory} />
      </div>
    )
  }
}

export default Root
