import * as ReflectionApiUtil from '../util/reflections_api_util';

export const RECEIVE_REFLECTIONS = "RECEIVE_REFLECTIONS";
export const RECEIVE_REFLECTION = "RECEIVE_REFLECTION";

export const receiveReflections = reflections => ({
  type: RECEIVE_REFLECTIONS,
  reflections
});

export const receiveReflection = reflection => ({
  type: RECEIVE_REFLECTION,
  reflection
});

export const fetchReflections = userId => dispatch => (
  ReflectionApiUtil.fetchReflections(userId)
    .then(reflections => dispatch(receiveReflections(reflections)))
    .catch(err => console.log(err))
);
export const createReflection = reflect => dispatch => (
  ReflectionApiUtil.createReflection(reflect)
    .then(reflection => dispatch(receiveReflection(reflection)))
    .catch(err => console.log(err))
);

export const updateReflection = reflect => dispatch => (
  ReflectionApiUtil.updateReflection(reflect)
    .then(reflection => dispatch(receiveReflection(reflection)))
    .catch(err => console.log(err))
);

