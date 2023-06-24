// Import the required modules
const mongoose = require('mongoose');
const shortId = require('shortid');

// Define the schema for short URLs
const shortUrlSchema = new mongoose.Schema({
full: {
type: String,
required: true
},
short: {
type: String,
required: true,
default: shortId.generate
},
clicks: {
type: Number,
required: true,
default: 0
}
});

// Export the model for short URLs
module.exports = mongoose.model('ShortUrl', shortUrlSchema);