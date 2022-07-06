// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DB from "../../../src/db";
import Monitor from "../../../src/db/models/entry";

const handler = async (req, res) => {
  if (req.method === "GET") {
    if (req.query !== undefined) {
      if (req.query.message !== undefined) {
        await DB();
        const monitor = new Monitor({
          monitorName: req.query.message,
        });
        try {
          const response = await monitor.save();
          if (response) {
            return res.status(200).json(response);
          }
        } catch (error) {
          return res.status(400).json(error);
        }
      }
      return res.status(400).json("No expected query");
    }
  }
  return res.status(405).json("method not allowed");
};
export default handler;
