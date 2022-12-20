import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.header("authorization-token");
  if (!token) return res.status(401).send("Acesso negado!");

  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    return res.status(401).send("Acesso negado");
  }
}
