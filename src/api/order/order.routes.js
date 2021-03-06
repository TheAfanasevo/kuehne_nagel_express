const { readFile } = require("fs/promises");
const { Router } = require("express");
const router = Router();

function Routes(Controller) {
  router.get("/", async (req, res) => {
    const { from, to } = req.query;

    if (!from || !to) {
      return res
        .status(400)
        .json({ success: false, error: "Missing query parameters" });
    }

    try {
      Controller.validateDateString([from, to]);
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    let data;
    let dataFilteredByParams;
    try {
      data = JSON.parse(await readFile("data/mockData.json", "utf8"));

      const parsedDateMap = [from, to].map((date) => Date.parse(date));

      const dataFilteredByDate = Controller.filterDataByDates(
        data,
        parsedDateMap
      );

      const filterParams = {
        code: "025",
        name: "test",
      };

      dataFilteredByParams = Controller.filterDataByParams(
        dataFilteredByDate,
        filterParams
      );

      if (!dataFilteredByParams.length > 0) {
        return res.status(200).json({ success: true, data: [] });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }

    try {
      const dataCountedAndGroupedByYear =
        Controller.countAndGroupByYear(dataFilteredByParams);

      res
        .status(200)
        .json({ success: true, data: dataCountedAndGroupedByYear });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  return router;
}

// module.exports = router;
module.exports = Routes;
