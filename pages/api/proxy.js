import axios from "axios";
export default async (req, res) => {
  const q = req.body;
  try {
    const { data } = await axios.post(
      `https://actkathon-data.actai.co/api/console/proxy?path=act_document%2F_search&method=GET`,
      q,
      {
        headers: {
          "Content-Type": "application/json",
          "kbn-xsrf": true,
        },
      }
    );
    res.send(data.hits.hits);
  } catch (error) {
    console.log(error);
  }
};
