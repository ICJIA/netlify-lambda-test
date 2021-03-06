const axios = require("axios");
exports.handler = (event, context, callback) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
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
