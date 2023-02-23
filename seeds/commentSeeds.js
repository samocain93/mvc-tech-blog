const { Comment } = require('../models');

const commentData = [
  {
    text: 'This will be awesome for the tech community',
    user_id: 1,
    post_id: 1,
  },

  {
    text: 'Hard to believe this is happening! We are living in the future',
    user_id: 2,
    post_id: 2,
  },

  {
    text: 'A lawsuit is headed their way',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
