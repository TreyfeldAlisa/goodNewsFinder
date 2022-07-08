const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  // console.log(
  //   '🚀 ~ file: getUser.js ~ line 5 ~ getUser ~ req.session',
  //   req.session
  // );
  const userId = req.session.userId;

  if (userId) {
    const user = await User.findByPk(userId.id);
    res.locals.user = user;
  }

  next();
};
