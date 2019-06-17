    
import { 
    SET_JOBS,
    SET_TITLE
  } from '../actions/types';
  const initialState = {
    jobs_list: [],
    title: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_JOBS: {
        return {
          ...state,
          jobs_list: action.payload
        }
      }
      case SET_TITLE : {
        return {
            ...state,
            title: action.payload
          }
      }
      default:
        return state;
    }
  };
  
  export default reducer;