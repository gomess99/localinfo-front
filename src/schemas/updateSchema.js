import { z } from "zod";

export const updateSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .transform((name) =>
      name
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  username: z
    .string()
    .min(3, { message: "Nome de usuário deve ter no mínimo 3 caracteres" })
    .transform((username) =>
      username
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  email: z.string().email({ message: "E-mail inválido" }),
});
