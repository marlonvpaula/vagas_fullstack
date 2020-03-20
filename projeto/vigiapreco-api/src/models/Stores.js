var mongoose = require('mongoose');

var StoresSchema = new mongoose.Schema({
  name: String,
  logo: String,
  link: String
},
{
    timestamps: true
});

mongoose.model('Stores', StoresSchema);