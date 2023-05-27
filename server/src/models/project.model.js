const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stall_no: {
        type: Number,
        required: true,
    },
    cover_image: {
        type: String,
        required: true,
    },
    vote_count: {
        type: Number,
        default: 0,
    },
    members: {
        type: Array,
        default: [
            {
                name: {
                    type: String,
                    required: true,
                },
                role: {
                    type: String,
                    enum: ['leader', 'member'],
                },
            },
        ],
    },
});


// add plugin that converts mongoose to json
projectSchema.plugin(toJSON);

/**
 * 
 *  * @typedef Project
 *  */
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
