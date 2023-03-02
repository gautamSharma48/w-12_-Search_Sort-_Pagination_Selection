const UserSchema = require("../model/userSchema");

const getUser = async (req, res) => {
  const { page = 1, limit = 10, key, name, email } = req.query;
  let projection = {};

  //if there are two or more keys provided by user
  if (key) {
    const keys = key.split(",").map(k=>k.trim());
    for (const k of keys) {
      projection[k] = 1;
    }
  }
  //projection is used for find only selection key-second parameter in find module
  //first is one filter key like name and email
  const user = await UserSchema.find(
    {
      name: { $regex: new RegExp(name, "i") },
      email: { $regex: new RegExp(email, "i") },
    },
    projection //{name : 1 , passoword:1} // if you give then its will return only name and password
  ) .skip((page - 1) * limit)
    .limit(limit * 1);
   

  res.status(200).json({ total: user.length, user });
};
module.exports = {
  getUser,
};
