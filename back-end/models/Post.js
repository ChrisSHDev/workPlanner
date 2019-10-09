const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	user: {
		type: Schema.Types.Object,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		required: true
	},
	cardType: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('Post', postSchema)