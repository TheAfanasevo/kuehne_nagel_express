const dateUtils = require("../date.utils");

describe("Validates whether given strings in proper date format", () => {
  describe("Should throw if property is not array", () => {
    const nonArrayTypeCases = [{}, null, "string", () => {}, 211311, undefined];
    test.each(nonArrayTypeCases)(
      "given %p as argument, throws error",
      (argument) => {
        expect(() => dateUtils.validateDateString(argument)).toThrow(Error);
      }
    );
  });

  describe("Should throw if one of given dates is not in proper date format", () => {
    const invalidDateFormatCases = [
      "xxyyazzz",
      123111321,
      "1-1231-9111",
      "Monday-Tuesday-2019",
      { object: "of something" },
      ["arr", 1231],
      NaN,
    ];
    test.each(invalidDateFormatCases)(
      "given %p as invalid date, throws error",
      (argument) => {
        expect(() => dateUtils.validateDateString(argument)).toThrow(Error);
      }
    );
  });

  describe("Should return true if proper date strings given in array", () => {
    const validDateFormatCases = [
      [["10-11-2012", "10/11/2009"]],
      [["2019-11-10T07:00:00+0000"]],
      [
        [
          new Date(2020, 11, 24, 10, 33, 30, 0),
          new Date(9, 11, 24),
          new Date("October 13, 2014 11:13:00"),
        ],
      ],
    ];
    test.each(validDateFormatCases)(
      "given %p as valid date array, returns true",
      (argument) => {
        expect(dateUtils.validateDateString(argument)).toBe(true);
      }
    );
  });
});
