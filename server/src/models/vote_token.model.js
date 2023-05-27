const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
        type: [
            {
                type : mongoose.SchemaTypes.ObjectId,
                ref : 'Project',
            },
        ],
        default: [],
    },
});

// add plugin that converts mongoose to json
voteTokenSchema.plugin(toJSON);
voteTokenSchema.plugin(paginate);

voteTokenSchema.statics.isVoteTokenTaken = async function (token, excludeVoteTokenId) {
    const voteToken = await this.findOne({ token, _id: { $ne: excludeVoteTokenId } });
    return !!voteToken;
};


/**
 * @typedef VoteToken
 */
const VoteToken = mongoose.model('VoteToken', voteTokenSchema);

module.exports = VoteToken;
