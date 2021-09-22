import React, { FC } from 'react'
import { Contato } from './contato'
import { ContatosForm } from './Form'
import { ContatosList } from './List'
import { useContatosLogic } from './useContatosLogic'

export const Contatos: FC = () => {

    const { addContato, contato, contatosList } = useContatosLogic();

    const handleFormSubmit = (contato: Contato) => {
        addContato(contato)
    }

    return (
        <>
            <ContatosForm submeterFormulario={handleFormSubmit} 
                          contato={contato} />
            <ContatosList list={contatosList} />
        </>
    )
}