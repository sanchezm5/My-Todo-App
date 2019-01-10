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
      <div className="categories-container">
        {
          categories.map((category) => (
            (
              <div key={category.id} className="box">
                <div>
                  <img src={category.imageUrl} className="icon" />
                  <h3 className="icontitle">{category.title}</h3>
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
