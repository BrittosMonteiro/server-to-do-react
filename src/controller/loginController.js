import UserModel from "../model/loginModel.js";

export async function createAccount(req, res) {
  const userData = req.body;

  const userModel = new UserModel({
    name: userData.name,
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });

  await userModel
    .save()
    .then((res) => res.toJSON())
    .then(() => {
      return res.send(userData);
    })
    .catch((err) => {
      return res.send(err);
    });
}

export async function login(req, res) {
  const userData = req.body;

  await UserModel.findOne()
    .where("username")
    .equals(userData.username)
    .where("password")
    .equals(userData.password)
    .then((res) => res.toJSON())
    .then((doc) => {
      const user = {
        id: doc._id,
        name: doc.name,
        email: doc.email,
        username: doc.username,
      };
      return res.send(user);
    })
    .catch((err) => {
      return res.send(err);
    });
}

export async function updatePassword(req, res) {
  const userData = req.body;

  const updateUserPassword = await UserModel.findByIdAndUpdate(userData.id, {
    password: userData.password,
  });

  return res.send(updateUserPassword);
}

export async function deleteAccount(req, res) {
  const { id } = req.body;

  const deleteUserAccount = await UserModel.findByIdAndDelete(id);

  return res.send(deleteUserAccount);
}
