const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
        type: [
            {
                name: {
                    type: String,
                    required: true,
                },
                role: {
                    type: String,
                    enum: ['leader', 'member'],
                    default: 'member',
                },
            },
        ],
        default: [],
    },
    college:{
        type: String,
        required: true,
        default: 'GCES'
    }
});


// add plugin that converts mongoose to json
projectSchema.plugin(toJSON);
projectSchema.plugin(paginate);

projectSchema.statics.isNameTaken = async function (name, excludeProjectId) {
    const project = await this.findOne({ name, _id: { $ne: excludeProjectId } });
    return !!project;
};


/**
 * 
 *  * @typedef Project
 *  */
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
