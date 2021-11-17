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
  const currDate = calDate.toLocaleDateString();
  const reflections = Object.values(state.entities.reflections);
  const currReflections = reflections.filter(reflection => new Date(reflection.createdAt).toLocaleDateString() === currDate);
  return currReflections;
}

export const getShowDetailGoals = (state, calDate) => {
  const currDate = calDate.toLocaleDateString();
  const goals = Object.values(state.entities.goals);
  const currGoals = goals.filter(goal => new Date(goal.createdAt).toLocaleDateString() === currDate);
  return currGoals;
}
