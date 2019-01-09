import axios from 'axios'

//Initial State
const initialState = {
  categories: [],
  category: {},
}

//Action Types
const GET_CATEGORIES = 'GET_CATEGORIES';

//Action Creators
const getCategories = categories => ({type: GET_CATEGORIES, categories})

//Thunk Action Creators
export const fetchCategories = () => async dispatch => {
    try {
      const {data} = await axios.get('/api/categories');
      dispatch(getCategories(data));
    } catch (err) {
      console.log(err);
    }
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.categories};
    default:
      return state;
  }
}
