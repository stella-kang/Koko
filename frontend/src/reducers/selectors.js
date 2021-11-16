export const getSortedReflections = state => {
  const reflections = Object.values(state.entities.reflections);
  reflections.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1);
  return reflections;
}

export const getTodaysMood = state => {
  let todayString = new Date().toLocaleDateString();
  for (let mood of Object.values(state.entities.moods)) {
    if (new Date(mood.createdAt).toLocaleDateString() === todayString) return mood;
  }
  return null;
}
