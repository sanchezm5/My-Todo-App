import axios from 'axios'

//Initial State
const initialState = {
  tasks: [],
  task: {},
}

//Action Types
const GET_TASKS = 'GET_TASKS';

//Action Creators
const getTasks = tasks => ({type: GET_TASKS, tasks})

//Thunk Action Creators
export const fetchTasks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/tasks');
    dispatch(getTasks(data));
  } catch (err) {
    console.log(err);
  }
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {...state, tasks: action.tasks};
    default:
      return state;
  }
}
