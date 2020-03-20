var mongoose = require('mongoose');
var Products = mongoose.model('Products');

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
};
module.exports = {
  getAll: async (req, res, next) => {
    try {
      let query = req.query;
      
      if (query.limit && query.limit > 30) {
        res.json({"err": "Valor limite deve ser menor que 30."});
        return;
      } else {
        query.limit = Number(query.limit);
      }

      if (query.sortBy) {
        if (query.descending == "true") {
          query.sortBy = "-"+query.sortBy;
        }
      } else {
        query.sortBy = "updatedAt";
        if (query.descending == "true") {
          query.sortBy = "-"+query.sortBy;
        }
      }

      if (!query.offset) {
        query.offset = 0;
      } else {
        query.offset = Number(query.offset);
      }

      if (!query.search) {
        query.search = "";
      }

      let prods = await Products.find({"title": new RegExp(query.search, "i")})
                                .sort(query.sortBy)
                                .skip(query.offset)
                                .limit(query.limit)
                                .populate("storeid");
      res.json(prods);
    } catch (err) {
      if(err){ return next(err); }
    }
  },
  post: async (req, res, next) => {
    try {
      let prod = new Products(req.body);
      prod = await prod.save();
      res.json(prod);
    } catch (err) {
      console.log(err);
      if(err){ return next(err); }
    }

  },
  update: async (req, res, next) => {
    try {
      let params = req.params;
      let prod = new Products(req.body);
      if (params.productId) {
        prod = await Products.updateOne({"_id":params.productId}, 
          {
            "title":prod.title,
            "price":prod.price,
            "link":prod.link,
            "image":prod.image,
            "percentage":prod.percentage,
          });
      }
      res.json(prod);
    } catch (err) {
      console.log(err);
      if(err){ return next(err); }
    }

  },
  remove: async (req, res, next) => {
    await Products.deleteOne({_id: req.params.productId});
    
    res.json({message: 'Removido com sucesso!'});
  },
}