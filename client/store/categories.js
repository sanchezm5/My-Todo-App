import axios from 'axios'

//Initial State
const initialState = {
  categories: [],
  category: {},
}

//Action Types
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_CATEGORY = 'GET_CATEGORY'
const ADD_CATEGORY = 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

//Action Creators
const getCategories = categories => ({type: GET_CATEGORIES, categories})
const getCategory = category => ({type: GET_CATEGORY, category})
const addCategory = category => ({type: ADD_CATEGORY, category})
const removeCategory = categoryId => ({type: REMOVE_CATEGORY, categoryId})

//Thunk Action Creators
export const fetchCategories = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/categories');
    dispatch(getCategories(data));
  } catch (err) {
    console.log(err);
  }
}

export const fetchCategory = (categoryId) => async dispatch => {
  try {
    const {data} = await axios.get(`/api/categories/${categoryId}`);
    dispatch(getCategory(data));
  } catch (err) {
    console.log(err);
  }
}

export const postCategory = (category) => async dispatch => {
  try {
    const {data} = await axios.post('/api/categories', category);
    dispatch(addCategory(data));
  } catch (err) {
    console.log(err);
  }
}

export const deleteCategory = (categoryId) => async dispatch => {
  try {
    await axios.delete(`/api/categories/${categoryId}`);
    dispatch(removeCategory(categoryId));
  } catch (err) {
    console.log(err);
  }
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.categories};
    case GET_CATEGORY:
      return {...state, category: action.category};
    case ADD_CATEGORY:
      return {...state, categories: [...state.categories, action.category]};
    case REMOVE_CATEGORY:
      return {...state, categories: state.categories.filter(category => category.id !== action.categoryId)};
    default:
      return state;
  }
}
