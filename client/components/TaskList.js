import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchTasks} from '../store/tasks'

class TaskList extends Component {
  async componentDidMount () {
    await this.props.fetchTasks();
  }

  render() {
    const {tasks} = this.props;
    return (
      <div id="todo-container">
        <ul>
        {
          tasks.map((task) => (
            (
              <div key={task.id} id="textbox" style={{clear: 'both'}}>
                <div id="taskbox">
                <p className="alignleft">Task: {task.task}</p>
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
  fetchTasks: () => dispatch(fetchTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
