const axios = require("axios");
const translate = async (text = "") => {
  const options = {
    method: "POST",
    url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "x-rapidapi-key": "ef254d8106msh9705bd138d388c6p1cee3ejsn76a74925db64",
      "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      q: text,
      source: "en",
      target: "vi",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  translate,
};
