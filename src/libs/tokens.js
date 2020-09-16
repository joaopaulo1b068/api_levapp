import jwt from "jsonwebtoken";
import { GetENV } from "../utils/env";

export function GenerateAuthToken(data = {}, expiresInHours = 8, algorithm = 'HS256') {

  return jwt.sign(data, GetENV('TOKEN_SECRET'), {
    expiresIn: 60 * 60 * expiresInHours,
    algorithm
  })

}
