var fs = require("fs");

export const saveMap = (app: any) => {
  app.post("/saveMap", async (req: any, res: any, next: any) => {
    console.log(req.query);
    console.log(req.body);
    fs.writeFileSync(`/home/node/app/data/maps/${req.query.name}.json`, JSON.stringify(req.body));
    try {
      res.json({ data: "ok" });
    } catch (error) {
      console.log(console.error());
      res.json({ status: "error", message: console.error() });
      next(error);
    }
  });
};
