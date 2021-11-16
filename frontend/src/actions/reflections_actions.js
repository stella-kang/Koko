import * as ReflectionApiUtil from '../util/reflections_api_util';

export const RECEIVE_REFLECTIONS = "RECEIVE_REFLECTIONS";
export const RECEIVE_REFLECTION = "RECEIVE_REFLECTION";
export const REMOVE_REFLECTION = "REMOVE_REFLECTION";

export const receiveReflections = reflections => ({
  type: RECEIVE_REFLECTIONS,
  reflections
});

export const receiveReflection = reflection => ({
  type: RECEIVE_REFLECTION,
  reflection
});

export const removeReflection = (reflectionId) => ({
  type: REMOVE_REFLECTION,
  reflectionId
})

export const fetchReflections = userId => dispatch => (
  ReflectionApiUtil.fetchReflections(userId)
    .then(payload => dispatch(receiveReflections(payload.data)))
    .catch(err => console.log(err))
);

export const updateReflection = reflection => dispatch => (
  ApiUtil.updateReflection(reflection)
    .then(reflection => dispatch(receiveReflection(reflection)))
    .catch(err => console.log(err))
);

export const createReflection = reflection => dispatch => (
  ApiUtil.createReflection(reflection)
    .then(reflection => dispatch(receiveReflection(reflection)))
    .catch(err => console.log(err))
);

export const deleteReflection = reflectionId => dispatch => {
  return ReflectionApiUtil.deleteReflection(reflectionId)
    .then(() => dispatch(removeReflection(reflectionId)))
}
