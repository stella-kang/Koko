import * as HistoryApiUtil from '../util/history_api_util';

export const RECEIVE_HISTORY = "RECEIVE_HISTORY";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

const receiveHistory = history => ({
  type: RECEIVE_HISTORY,
  history
})

export const clearHistory = () => ({
  type: CLEAR_HISTORY
})

export const fetchHistory = (userId, date) => dispatch => {
  return HistoryApiUtil.fetchHistory(userId, date)
    .then(payload => dispatch(receiveHistory(payload.data)));
}
