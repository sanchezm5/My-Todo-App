import axios from 'axios'

//Initial State
const initialState = {
  tasks: [],
  task: {},
}

//Action Types
const GET_TASKS = 'GET_TASKS';
const GET_TASK = 'GET_TASK';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

//Action Creators
const getTasks = tasks => ({type: GET_TASKS, tasks})
const getTask = task => ({type: GET_TASK, task})
const addTask = task => ({type: ADD_TASK, task})
const removeTask = taskId => ({type: REMOVE_TASK
, taskId})

//Thunk Action Creators
export const fetchTasks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/tasks');
    dispatch(getTasks(data));
  } catch (err) {
    console.log(err);
  }
}

export const fetchTask = (taskId) => async dispatch => {
  try {
    const {data} = await axios.get(`/api/tasks/${taskId}`);
    dispatch(getTask(data));
  } catch (err) {
    console.log(err);
  }
}

export const postTask = (task) => async dispatch => {
  try {
    const {data} = await axios.post('/api/tasks', task);
    dispatch(addTask(data));
  } catch (err) {
    console.log(err);
  }
}

export const deleteTask = (taskId) => async dispatch => {
  try {
    await axios.delete(`/api/tasks/${taskId}`);
    dispatch(removeTask(taskId));
  } catch (err) {
    console.log(err);
  }
}
//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {...state, tasks: action.tasks};
    case GET_TASK:
      return {...state, task: action.task};
    case ADD_TASK:
      return {...state, tasks: [...state.tasks, action.task]};
    case REMOVE_TASK:
      return {...state, tasks: state.tasks.filter(task => task.id !== action.taskId)};
    default:
      return state;
  }
}
