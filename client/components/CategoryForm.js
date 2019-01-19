import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postCategory} from '../store/categories'

class CategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
       [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCategory(this.state);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Add New Category</label>
          <div>
            <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title} />
          <button type="submit">+</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addCategory: (category) => dispatch(postCategory(category))
});

export default connect(null, mapDispatchToProps)(CategoryForm);
