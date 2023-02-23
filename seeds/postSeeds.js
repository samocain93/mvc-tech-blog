const { Post } = require("../models");

const postData = [
  {
    title: "Here comes Bard, Google's version of ChatGPT",
    content:
      "The new AI chat bot is available to 'trusted testers' for now and will be released to the public in the “coming weeks.",
    user_id: 1,
  },
  {
    title: "Where will all the laid-off tech workers go?",
    content: "The bright side to all these terrible tech layoffs",
    user_id: 2,
  },

  {
    title: "GoodRx made money off your health data. The FTC is making it pay.",
    content: "More like BadRx",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;