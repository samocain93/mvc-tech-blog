const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This will be awesome for the tech community",
    user_id: 1,
    post_id: 1,
  },

  {
    comment_text:
      "Hard to believe this is happening! We are living in the future",
    user_id: 2,
    post_id: 2,
  },

  {
    comment_text: "A lawsuit is headed their way",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
