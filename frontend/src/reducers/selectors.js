export const getSortedReflections = state => {
  const reflections = Object.values(state.entities.reflections);
  reflections.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1);
  return reflections;
}

export const getTodaysMood = state => {
  const todayString = new Date().toLocaleDateString();
  for (let mood of Object.values(state.entities.moods)) {
    if (new Date(mood.createdAt).toLocaleDateString() === todayString) {
      return mood;
    }
  }
  return null;
}

export const getShowDetailMood = (state, calDate) => {
  const currDate = calDate.toLocaleDateString();
  for (let mood of Object.values(state.entities.moods)) {
    if (new Date(mood.createdAt).toLocaleDateString() === currDate) {
      return mood;
    }
  }
  return null;
}

export const getShowDetailReflections = (state, calDate) => {
  const reflections = Object.values(state.entities.reflections);
  const currReflections = reflections.filter(reflection => reflection.createdAt.toLocaleString() === calDate);
  return currReflections;
}

export const getShowDetailGoals = (state, calDate) => {
  const goals = Object.values(state.entities.goals);
  const currGoals = goals.filter(goal => goal.createdAt.toLocaleString() === calDate);
  return currGoals;
}
