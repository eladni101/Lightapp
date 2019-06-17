import * as types from './types';
export const set_title = (data) => dispatch => {
    dispatch({
        type: types.SET_TITLE,
        payload: data
    });
}

export const get_jobs = () => dispatch => {
    const url = "https://jobs.search.gov/jobs/search.json?query=nursing+jobs";
    fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        dispatch({
            type: types.SET_JOBS,
            payload: data 
        })
      }).catch((error) => {
        console.log(error);
      });
}

