const mongoose = require('mongoose');

let ProductsSchema = new mongoose.Schema({
  storeid: { type: mongoose.Schema.Types.ObjectId, ref: 'Stores' },
  title: String,
  price: Number,
  link: String,
  image: String,
  percentage: Number,
},
{
    timestamps: true
});

mongoose.model('Products', ProductsSchema);