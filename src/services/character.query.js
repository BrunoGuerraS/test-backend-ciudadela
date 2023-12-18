const QCharacters = (species, page = 1) => {
    return `
        query {
            characters(filter: {species: "${species}"}, page: ${page}) {
              info {
                count
                pages
                next
                prev
              }
              results {
                id
                name
                species
                image
                status
                type
              }
            }
          }
    
        `;
  };
  const QCharater = (id = 1) => {
    return `
        query{
            character(id:${id}){
              id
              name
              status
              species
              type
                gender
              origin {
                name
              }
              location{
                name
              }
              image
              
              
            }
          }
        `;
  };

  module.exports = {QCharacters, QCharater};