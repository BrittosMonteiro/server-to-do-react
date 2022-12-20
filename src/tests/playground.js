import bcrypt from "bcryptjs";

const pass = "Minha senha";
const savedPass =
  "$2a$14$fUu39N5p999mziAaXzWJ5e2b.LMZOnGZrepAi.cX6iONFVoYRjBty";

const salt = bcrypt.genSaltSync(14);

const encryptedPass = bcrypt.hashSync(pass, salt);

// console.log(encryptedPass);
console.log(bcrypt.compareSync(pass, savedPass));
