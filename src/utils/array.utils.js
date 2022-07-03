/**
 *
 * @param {Object[]} array
 * @returns {Object[]}
 */
module.exports.filterArrayOfObjectsByUniqueObjectProperty = (
  array,
  propertyKey
) => {
  if (!Array.isArray(array)) {
    throw new Error("A non-array type passed to the function");
  }
  if (typeof propertyKey !== "sring") {
    throw new Errro("Argument propertyKey should be a string");
  }
  return array.filter((filterValue, index, self) => {
    return (
      self.findIndex(
        (arrayItem) => arrayItem[propertyKey] == filterValue[propertyKey]
      ) === index
    );
  });
};
