import * as DayShowApiUtil from '../util/day_show_api_util';

export const RECEIVE_DAY_SHOW = "RECEIVE_DAY_SHOW";
export const CLEAR_DAY_SHOW = "CLEAR_DAY_SHOW";

const receiveDayShow = dayShow => ({
  type: RECEIVE_DAY_SHOW,
  dayShow
})

export const clearDayShow = () => ({
  type: CLEAR_DAY_SHOW
})

export const fetchDayShow = (userId, date) => dispatch => {
  return DayShowApiUtil.fetchDayShow(userId, date)
    .then(payload => {
      dispatch(receiveDayShow(payload.data))
    });
}
