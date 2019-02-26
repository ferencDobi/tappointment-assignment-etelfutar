module.exports = {
  equalsInAnyOrder: (array1, array2, sortBy) => JSON.stringify(
    array1.sort((a, b) => a[sortBy] - b[sortBy])
  ) === JSON.stringify(
    array2.sort((a, b) => a[sortBy] - b[sortBy])
  )
};
