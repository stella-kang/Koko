export const getSortedReflections = (state) => {
  const reflections = Object.values(state.entities.reflections);
  reflections.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
  return reflections;
}
