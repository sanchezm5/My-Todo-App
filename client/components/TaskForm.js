import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postTask} from '../store/tasks'
import {fetchCategories} from '../store/categories'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      dueDate: '',
      notes: '',
      categoryId: '',
    }
    this.id = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchCategories()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelect(event) {
    this.id = event.target.value
    this.setState({
      categoryId: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      task: '',
      dueDate: '',
      notes: '',
      categoryId: '',
    })
  }

  render() {
    console.log('props', this.props)
    console.log('event.target.value = ', event.target.value)
    console.log('this.state = ', this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Add New Task</label>
          <div>
            <label>Task</label>
            <input
            onChange={this.handleChange}
            type="text"
            name="task"
            value={this.state.task} />

            <label>Due Date</label>
            <input
            onChange={this.handleChange}
            type="text"
            name="dueDate"
            value={this.state.dueDate} />
          </div>

          <div>
            <label>Notes</label>
            <input
            onChange={this.handleChange}
            type="text"
            name="notes"
            value={this.state.notes} />

            <label>Select Category</label>
            <select onChange={this.handleSelect}>
            <option value={null} />
            {this.props.categories && this.props.categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
            </select>

            <button type="submit">+</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {categories: state.categories.categories}
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  addTask: (task) => dispatch(postTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
