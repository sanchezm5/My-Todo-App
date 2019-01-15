import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchCategory} from '../store/categories'

class SingleCategory extends Component {
  async componentDidMount () {
    const id = this.props.match.params.categoryId
    await this.props.fetchCategory(id)
  }

  render () {
    const category = this.props.category;
    const tasks = category.tasks;

    return (
      <div id="todo-container">
        <div>
          <img src={category.imageUrl} className="icon" />
          <h2 className="icontitle">{category.title}</h2>
        </div>
        <div>
        {
          tasks && tasks.length > 0 ? tasks.map(task => (
            (
              <div key={task.id} id="textbox" style={{clear: 'both'}}>
              <div id="taskbox">
                <Link to={`/tasks/${task.id}`}>
                  <p className="alignleft">Task: {task.task}</p>
                </Link>
                <p className="alignright">Due Date: {task.dueDate.slice(5, 7) + '/' + task.dueDate.slice(8, 11) + '/' + task.dueDate.slice(0, 4) }</p>
              </div>
              </div>
            )
          )) : <div className="center">There are currently no tasks to complete for this category.</div>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {category: state.categories.category}
};

const mapDispatchToProps = dispatch => ({
  fetchCategory: (id) => dispatch(fetchCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory);
