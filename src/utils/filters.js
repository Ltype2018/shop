let filters = {
    default(products){
        return products
    },
    price(products){
        let newProducts = JSON.parse(JSON.stringify(products))
        newProducts.sort((a, b) =>a.price - b.price)
        return newProducts
    },
    sales(products){
        let newProducts = JSON.parse(JSON.stringify(products))
        newProducts.sort((a, b) =>b.sales - a.sales)
        return newProducts
    },
    evaluation(products){
        let newProducts = JSON.parse(JSON.stringify(products))
        newProducts.sort((a, b) =>b.evaluation - a.evaluation)
        return newProducts
    }
}

export default filters