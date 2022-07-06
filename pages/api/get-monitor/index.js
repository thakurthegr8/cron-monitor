// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DB from "../../../src/db";
import Monitor from "../../../src/db/models/entry";

const handler = async (req, res) => {
  if (req.method === "GET") {
    await DB();
    try {
      const response = await Monitor.find({});
      if (response) {
        console.log(response);
      }
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json("internal server error");
    }
  }
  res.status(405).json("method not allowed");
};
export default handler;
