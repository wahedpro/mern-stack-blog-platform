const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    slug : {
      type: String,
      required: true,
      unique: true
    },
    content : {
        type: String,
        required: true
    },
    thumbnail : {
        type: String,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    publishedAt: {
        type: Date
    },
    status: {
      type: String,
      enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'],
      default: 'DRAFT'
    },
    tags: {
        type: [String],
        default: []
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        ref: "User",
        required: true
    }
},{timestamps:true});


module.exports = mongoose.model("Post", postSchema)