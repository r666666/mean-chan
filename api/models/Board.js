const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Board = new Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  threadList: {
    type: Array
  }
},{
  collection: 'board'
});

module.exports = mongoose.model('Board', Board);