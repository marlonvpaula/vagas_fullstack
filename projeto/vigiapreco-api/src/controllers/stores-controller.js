var mongoose = require('mongoose');
var Stores = mongoose.model('Stores');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      let query = req.query;
      
      if (query.limit && query.limit > 30) {
        res.json({"err": "Valor limite deve ser menor que 30."});
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

      let store = await Stores.find({"name": new RegExp(query.search, "i")})
                              .sort(query.sortBy)
                              .skip(query.offset)
                              .limit(query.limit);
      res.json(store);
    } catch (err) {
      if(err){ return next(err); }
    }
  },
  update: async (req, res, next) => {
    try {
      let params = req.params;
      let store = new Stores(req.body);
      if (params.storeid) {
        store = await Stores.updateOne({"_id":params.storeid},  
        {
          "name":store.name,
          "link":store.link,
          "logo":store.logo,
        });
      }
      res.json(store);
    } catch (err) {
      console.log(err);
      if(err){ return next(err); }
    }

  },
  post: async (req, res, next) => {
    try {
      let store = new Stores(req.body);
      store = await store.save();
      res.json(store);
    } catch (err) {
      console.log(err);
      if(err){ return next(err); }
    }
  },
  remove: async (req, res, next) => {
    await Stores.deleteOne({_id: req.params.storeid});
    
    res.json({message: 'Removido com sucesso!'});
  },
}