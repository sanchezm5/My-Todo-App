import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchCategories, deleteCategory} from '../store/categories'
import CategoryForm from './CategoryForm'

class Categories extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this)
  }

  async componentDidMount () {
    await this.props.fetchCategories();
  }

  handleRemove(categoryId) {
    this.props.removeCategory(categoryId);
  }

  render() {
    const {categories} = this.props;
    return (
      <div className="categories-container">
        <div><CategoryForm /></div>
        {
          categories.map((category) => (
            (
              <div key={category.id} className="box">
                <div>
                  <img src={category.imageUrl} />
                  <Link to={`/categories/${category.id}`}>
                    <h4>{category.title}</h4>
                  </Link>
                  <button onClick={() => this.handleRemove(category.id)} type="button" >X</button>
                </div>
              </div>
            )
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {categories: state.categories.categories}
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  removeCategory: (categoryId) => dispatch(deleteCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
