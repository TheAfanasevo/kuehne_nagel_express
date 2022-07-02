function Controller(Service, { arrayUtils }) {
  /**
   * Validate the date strings passed as query parameters.
   * @param {string[]} dates
   */
  function validateDateString(dates) {
    if (!Array.isArray(dates)) {
      throw new Error("Only array is accepted as valid parameter.");
    }

    let i = 0;
    dates.forEach((date) => {
      i++;
      const parsedDate = Date.parse(date);
      console.log(parsedDate, `date ${i}`);
      if (isNaN(parsedDate)) {
        throw new Error("Date provided in invalid format.");
      }
    });

    return true;
  }

  /**
   * Filter the fetched data by dates.
   * @param {dates: string[]} dates
   */
  function filterDataByDates(data, dates) {
    return data.filter((datum) => {
      return (
        Date.parse(datum.date) >= dates[0] && Date.parse(datum.date) <= dates[1]
      );
    });
  }

  /**
   * Filter the fetched data by given parameters.
   * @param {Object[]} data
   * @param {{code: string, name: string }} filterParams
   */
  function filterDataByParams(data, filterParams) {
    return data.filter(({ id, code, name }) => {
      return (
        !!id == true && code === filterParams.code && name === filterParams.name
      );
    });
  }

  /**
   * Group the filtered objects by year and quantity in a new array.
   * This array should contain objects {year: x, quantity: y}.
   * @param {Object[]} data
   */
  function countAndGroupByYear(data) {
    if (!data || data.length === 0) {
      throw new Error("No data provided.");
    }

    const someDontHaveDateOrId = data.some((datum) => {
      return !datum.id || !datum.date;
    });

    if (someDontHaveDateOrId) {
      throw new Error(
        "Some of the data do not have date. Data cannot be grouped and counted by year."
      );
    }

    const dateConvertedData = data.map((datum) => ({
      ...datum,
      year: new Date(datum.date).getFullYear(),
    }));

    // assuming that objects with the same id are holding the same data
    const dataFilteredByUniqueId =
      arrayUtils.filterArrayOfObjectsByUniqueObjectProperty(dateConvertedData);

    const dataGroupedAndCounted = dataFilteredByUniqueId.reduce(
      (counts, { year }) => {
        counts[year] = (counts[year] || 0) + 1;
        return counts;
      },
      {}
    );

    const dataMappedToArray = Object.keys(dataGroupedAndCounted).map((key) => {
      return {
        year: key,
        quantity: dataGroupedAndCounted[key],
      };
    });

    return dataMappedToArray;
  }

  return {
    validateDateString,
    filterDataByDates,
    filterDataByParams,
    countAndGroupByYear,
  };
}

module.exports = Controller;
