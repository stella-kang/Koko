export const getSortedReflections = (state) => {
  const reflections = Object.values(state.entities.reflections);
  reflections.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1);
  return reflections;
}
