const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "commemnt 1",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "comment 2",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "comment 3",
        user_id: 3,
        post_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;