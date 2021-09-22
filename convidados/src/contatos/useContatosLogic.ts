import { useState } from 'react'
import { Contato } from './contato'
import { v4 as uuid } from 'uuid'

export const useContatosLogic = () => {

    const newContato: Contato = {
        idade: '', nome: ''
    }
    const [ contatosList, setContatosList ] = useState<Contato[]>([])
    const [ contato, setContato ] = useState<Contato>(newContato)

    const addContato = (contato: Contato) => {
        contato.id = uuid()
        const lista = [...contatosList, contato]
        setContatosList(lista)
        setContato(newContato)
        console.log(lista)
    }

    return {
        contato,
        addContato,
        contatosList
    }
}