const {product, products} = require('./product.resolve')


const resolvers = {
  Query: {
    product,
    products
  }
}

module.exports = resolvers
