const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const linkschema = mongoose.Schema({
    youtube: [String],
    instagram: [String],
    twitter: [String],
    id:{
        type: String,
        required: true
    }
});

const links=mongoose.model('links', linkschema);
module.exports=links;