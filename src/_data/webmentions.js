const axios = require('axios');

module.exports = async function () {
    // Fetch the webmentions
    var { data } = await axios.get("https://webmention.io/api/mentions?token=zX2Hco2zyi1jOPitxiFGsA")
    return data;
};