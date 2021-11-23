const User = require('../models/User.js');

/**
 * GET /members
 * Members page.
 */
exports.getMembers = (req, res) => {
  // find all users
  User.find({}, (err, docs) => {
    // console.log("getMembers");
    // console.log(docs);
    res.render('members', { members: docs });
  });
};
