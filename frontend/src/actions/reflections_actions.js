import * as ApiUtil from '../util/reflections_api_util';

export const RECEIVE_REFLECTIONS = "RECEIVE_REFLECTIONS";

export const receiveReflections = reflections => ({
  type: RECEIVE_REFLECTIONS,
  reflections
});

export const fetchReflections = userId => dispatch => (
  ApiUtil.fetchReflections(userId)
    .then(reflections => dispatch(receiveReflections(reflections)))
    .catch(err => console.log(err))
);
