/**
 *
 * @param {Object[]} array
 * @param {Function} keyFunc (arrayPlaceholder) => arrayPlaceholder.mappedElement
 * @returns {Object}
 */
module.exports.groupArrayOfObjectsByKey = (array, key) => {
  return array.reduce((counts, { key }) => {
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
};

/**
 *
 * @param {Object[]} array
 * @returns {Object[]}
 */
module.exports.filterArrayOfObjectsByUniqueObjectProperty = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("A non-array type passed to the function");
  }
  return array.filter((value, index, self) => {
    return self.findIndex((v) => v.id == value.id) === index;
  });
};
