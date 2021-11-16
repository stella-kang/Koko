export const getSortedReflections = state => {
  const reflections = Object.values(state.entities.reflections);
  reflections.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1);
  return reflections;
}

export const getTodaysMood = state => {
  let todayString = new Date().toLocaleDateString();
  for (let mood of Object.values(state.entities.moods)) {
    if (new Date(mood.createdAt).toLocaleDateString() === todayString) {
      return mood;
    }
  }
  return null;
}

export const getShowDetailMoods = (state, calDate) => {
  if (!state.entities.moods) return {};
  const moods = Object.values(state.entities.moods);
  const currMoods = moods.filter(mood => mood.created_at.toLocaleString() === calDate.toLocalString());
  return currMoods;
}

export const getShowDetailReflections = (state, calDate) => {
  const reflections = Object.values(state.entities.reflections);
  const currReflections = reflections.filter(reflection => reflection.created_at.toLocaleString() === calDate.toLocalString());
  return currReflections;
}

export const getShowDetailGoals = (state, calDate) => {
  const goals = Object.values(state.entities.goals);
  const currGoals = goals.filter(goal => goal.created_at.toLocaleString() === calDate.toLocalString());
  return currGoals;
}
