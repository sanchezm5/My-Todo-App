import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchTask} from '../store/tasks'

class SingleTask extends Component {
  async componentDidMount () {
    const id = this.props.match.params.taskId
    await this.props.fetchTask(id)
  }

  render () {
    const task = this.props.task;
    const category = task.category;
    const date = String(task.dueDate);
    
    return (
      <div id="todo-container" className="center">
        <ul>
          <div className="task-info">
            Task: {task.task}
          </div>
          <div className="task-info">
            Due Date: {date.slice(5, 7) + '/' + date.slice(8, 11) + '/' + date.slice(0, 4)}
          </div>
          <div className="task-info">
           {task.notes ? (<div>Notes: {task.notes}</div>) : <div className="center">Notes: There are no notes for this task.</div>}
          </div>
          <div className="task-info">
            {
              category ? (
              <Link to={`/categories/${category.id}`}>
                <div>Category: {task.category.title}</div>
              </Link>) :
              <div className="center"> Category: This task is not currently assigned to a category.</div>
            }
          </div>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {task: state.tasks.task}
};

const mapDispatchToProps = dispatch => ({
  fetchTask: (id) => dispatch(fetchTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);
