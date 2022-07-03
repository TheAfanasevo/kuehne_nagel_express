const arrayUtils = require("../array.utils");

describe("Filter array of objects by unique object property", () => {
  describe("Should throw if non-array given as first argument", () => {
    const nonArrayTypeCases = [{}, null, "string", () => {}, 211311, undefined];
    test.each(nonArrayTypeCases)(
      "given %p as non-array argument, throws error",
      (argument) => {
        expect(() =>
          arrayUtils.filterArrayOfObjectsByUniqueObjectProperty(argument)
        ).toThrow(Error);
      }
    );
  });

  describe("Should throw if non-string type is given as second argument", () => {
    const nonStringTypeCases = [
      {},
      null,
      NaN,
      () => {},
      1211121,
      undefined,
      [],
    ];
    test.each(nonStringTypeCases)(
      "given %p as non-string argument, throws error",
      (argument) => {
        const arrayOfObjects = [
          { id: 24, code: "28", name: "Assorted Desserts", date: "2021-07-08" },
          { id: 25, code: "0208", name: "Sole - Fillet", date: "2022-05-04" },
        ];
        expect(() =>
          arrayUtils.filterArrayOfObjectsByUniqueObjectProperty(
            arrayOfObjects,
            argument
          )
        ).toThrow(Error);
      }
    );
  });

  describe("Should return array if valid parameters given", () => {
    const validKeys = ["id", "code", "name", "date"];
    test.each(validKeys)(
      "given %p as non-string argument, throws error",
      (argument) => {
        const arrayOfObjects = [
          { id: 24, code: "28", name: "Assorted Desserts", date: "2021-07-08" },
          { id: 25, code: "0208", name: "Sole - Fillet", date: "2022-05-04" },
        ];
        expect(
          arrayUtils.filterArrayOfObjectsByUniqueObjectProperty(
            arrayOfObjects,
            argument
          )
        ).toBeInstanceOf(Array);
      }
    );
  });
});
