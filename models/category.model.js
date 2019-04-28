const mongoose =  require ('mongoose');
var categorySchema = new mongoose.Schema({
    name: String        
})
var category = mongoose.model('category', categorySchema, 'Category');
module.exports = category;