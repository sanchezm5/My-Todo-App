import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchCategories} from '../store/categories'

class Categories extends Component {
  async componentDidMount () {
    await this.props.fetchCategories();
  }

  render() {
    const {categories} = this.props;
    return (
      <div>
        {
          categories.map((category) => (
            (
              <div key={category.id}>
                <div>
                  <img src={category.imageUrl} />
                  <h3>{category.title}</h3>
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
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
