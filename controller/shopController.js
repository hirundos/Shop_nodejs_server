const shop = require('../model/shopModel');

//상품 목록 출력
exports.getProducts = async (req, res) => {

    try {
        const products = await shop.getProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};

