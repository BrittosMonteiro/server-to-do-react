import UserModel from "../model/loginModel.js";
import bcrypt from "bcryptjs";

export async function createAccount(req, res) {
  const userData = req.body;

  const userModel = new UserModel({
    name: userData.name,
    email: userData.email,
    username: userData.username,
    password: bcrypt.hashSync(userData.password, 14),
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

  try {
    const user = await UserModel.findOne({ username: userData.username });
    if (!user) {
      return res.status(400).send("Usuário/senha incorretos");
    }

    const comparePass = bcrypt.compareSync(userData.password, user.password);
    if (!comparePass) {
      return res.status(400).send("Usuário/senha incorretos");
    }

    const response = {
      id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    };

    return res.status(200).send(response);
  } catch (err) {
    return res.status(400).send(err);
  }
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
