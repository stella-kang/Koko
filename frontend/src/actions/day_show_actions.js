import * as DayShowApiUtil from '../util/day_show_api_util';
import { receiveReflections } from './reflections_actions';
import { receiveGoals } from './goal_actions';
import { receiveMoods } from './mood_actions';

export const fetchDayShow = (userId, date) => dispatch => {
  return DayShowApiUtil.fetchDayShow(userId, date)
    .then(payload => {
      dispatch(receiveReflections(payload.data.reflection))
      dispatch(receiveGoals(payload.data.goals))
      dispatch(receiveMoods(payload.data.mood))
    });
}
