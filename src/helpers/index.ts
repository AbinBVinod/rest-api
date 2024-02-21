import crypto from "crypto";

const SECRET = "ABIN";

export const radnom = () => crypto.randomBytes(128).toString("base64");

export const authetication = () => (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
