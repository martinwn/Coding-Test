const axios = require("axios");
module.exports = {
  grabPosts: function() {
    return axios.get("/api/data");
  }
};
