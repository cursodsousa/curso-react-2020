import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { useFormik, FormikHelpers } from 'formik'

import { Contato, validationScheme } from './contato'

import './index.css'

interface ContatosFormProps {
    contato: Contato;
    submeterFormulario: (contato: Contato) => void;
}

export const ContatosForm: React.FC<ContatosFormProps> = ({ 
    contato,
    submeterFormulario
} : ContatosFormProps) => {

    const onSubmit = (contato: Contato, helper: FormikHelpers<Contato>) => {
        submeterFormulario(contato)
        helper.resetForm();
    }

    const formik = useFormik<Contato>({
        onSubmit,
        initialValues: {...contato},
        validationSchema: validationScheme,
        validateOnChange: false
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container >
                <Grid item xs={12}>
                    <TextField variant="outlined" 
                               label="Nome"
                               name="nome"
                               id="inputNome"
                               value={formik.values.nome}
                               onChange={formik.handleChange}
                               className="full-width"
                               />
                    <span className="error-msg">{ formik.errors.nome }</span>
                </Grid>
                <br/>
                <Grid item xs={12}>
                    <TextField variant="outlined" 
                               label="Idade"
                               name="idade"
                               id="inputIdade"
                               value={formik.values.idade}
                               onChange={formik.handleChange}
                               className="full-width"
                               />
                    <span className="error-msg">{ formik.errors.idade }</span>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" 
                            className="full-width"
                            variant="contained" 
                            color="primary">
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}