import * as Yup from 'yup'

export interface Contato {
    id?: string;
    nome: string;
    idade: number | '';
}

export const validationScheme = Yup.object().shape({
    nome: Yup.string()
            .required("Campo obrigatório.")
            .min(5,"Digite pelo menos 5 caracteres."),
    idade: Yup.number()
            .required("Campo obrigatório")
            .min(10, "Idade mínima é 10 anos.")
})
