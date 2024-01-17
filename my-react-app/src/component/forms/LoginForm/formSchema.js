import {z} from "zod"

export const formSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string().nonempty("Senha é obrigatória")
})