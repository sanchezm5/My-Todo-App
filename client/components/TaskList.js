import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchTasks, deleteTask} from '../store/tasks'
import TaskForm from '../components/TaskForm'

class TaskList extends Component {
  async componentDidMount () {
    await this.props.fetchTasks();
  }

  render() {
    const {tasks} = this.props;
    console.log('tasks', tasks)
    return (
      <div id="todo-container">
      <div><TaskForm /></div>
        <ul>
        {
          tasks.map((task) => (
            (
              <div key={task.id} id="textbox" style={{clear: 'both'}}>
                <button onClick={() => this.props.removeTask(task.id)} className="alignright" type="button">X</button>
                <div id="taskbox">
                <Link to={`/tasks/${task.id}`}>
                  <p className="alignleft">Task: {task.task}</p>
                </Link>
                <p className="alignright">Due Date: {task.dueDate.slice(5, 7) + '/' + task.dueDate.slice(8, 11) + '/' + task.dueDate.slice(0, 4) }</p>
                </div>
              </div>
            )
          ))
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {tasks: state.tasks.tasks}
};

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  removeTask: (taskId) => dispatch(deleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
