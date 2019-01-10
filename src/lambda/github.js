const axios = require("axios");
axios.defaults.baseURL = "https://api.github.com";
const { GITHUB_TOKEN } = process.env;

exports.handler = (event, context, callback) => {
  const page = event.queryStringParameters.page || 1;
  const perPage = event.queryStringParameters.perPage || 20;
  axios
    .get(`/users/cschweda/events?page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: "token " + GITHUB_TOKEN
      }
    })
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data)
      });
    })
    .catch(err => {
      callback(err);
    });
};
