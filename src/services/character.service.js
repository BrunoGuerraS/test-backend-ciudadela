const config = require("../config/config");

const getDataFromApiGraphRnM = async (query) => {
    const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      return data.data;
}

module.exports = {getDataFromApiGraphRnM};