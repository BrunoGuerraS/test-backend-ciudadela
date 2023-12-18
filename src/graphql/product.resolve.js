// const ProductsService = require("../services/product.service")
// const service = new ProductsService()

const product = async (_, {id}) => {
  // const productById = await service.findOne(id)
  // return productById
}

const products = async () => {
  // const allProducts = await service.find()
  // return allProducts
}

const addProduct = () => {}

module.exports = { product, products, addProduct }
