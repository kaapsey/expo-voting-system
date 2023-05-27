const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const voteTokenSchema = new mongoose.Schema({
    token : {
        type: String,
        required: true,
        index: true,
    },
    hasVoted : {
        type: Boolean,
        default: false,
    },
    voted_projects : {
        type: Array,
        default: [
            {
                type : mongoose.SchemaTypes.ObjectId,
                ref : 'Project',
            },
        ],
    },
    expires : {
        type: Date,
        required: true,
    },
});

// add plugin that converts mongoose to json
voteTokenSchema.plugin(toJSON);

/**
 * @typedef VoteToken
 */
const VoteToken = mongoose.model('VoteToken', voteTokenSchema);

module.exports = VoteToken;
