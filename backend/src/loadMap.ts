var fs = require("fs");

export const loadMap = (app: any) => {
  app.get("/loadMap", async (req: any, res: any, next: any) => {
    const data = fs.readFileSync(`/home/node/app/data/maps/${req.query.name}.json`, 'utf8');
    try {
      res.json({ data: data });
    } catch (error) {
      console.log(console.error());
      res.json({ status: "error", message: console.error() });
      next(error);
    }
  });
};
