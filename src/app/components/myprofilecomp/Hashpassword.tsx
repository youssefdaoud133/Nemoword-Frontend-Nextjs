// utils/hashPassword.ts
import { createHash } from "crypto";

export const hashPassword = (password: string): string => {
  return "*".repeat(password.length);
};
