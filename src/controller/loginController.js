import UserModel from "../model/loginModel.js";

export async function createAccount(req, res) {
  const userData = req.body;

  const userModel = new UserModel({
    name: userData.name,
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });

  const create = await userModel.save();

  return res.send(create);
}

export async function login(req, res) {
  const userData = req.body;

  let userResponse = {
    id: "",
    name: "",
    email: "",
    username: "",
  };

  await UserModel.findOne()
    .where("username")
    .equals(userData.username)
    .where("password")
    .equals(userData.password)
    .then((res) => {
      (userResponse.id = res._id),
        (userResponse.name = res.name),
        (userResponse.email = res.email),
        (userResponse.username = res.username);
    });

  return res.send(userResponse);
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
