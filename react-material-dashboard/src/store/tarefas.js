import axios from 'axios'

const http = axios.create({
    baseURL: 'https://minhastarefas-api.herokuapp.com',
})

const STATE_INICIAL = {
    tarefas: [],
    size: 0
}

const actions = {
    LISTAR: 'TAREFAS_LISTAR',
    ADD: 'TAREFAS_ADD',
    SIZE: 'TAREFAS_SIZE'
}

export const tarefaReducer = (state = STATE_INICIAL, action) => {
    switch(action.type){
        case actions.LISTAR:
            return {...state, tarefas: action.tarefas, size: action.size}
        case actions.ADD:
            return {...state, tarefas: [...state.tarefas, action.tarefa], size : state.size + 1 }
        default:
            return state;
    }
}

export function listar(){
    return dispatch => {
        http.get('/tarefas', {
            headers: {'x-tenant-id' : localStorage.getItem('email') }
        })
        .then( response => {
            dispatch({
                type: actions.LISTAR,
                tarefas: response.data,
                size: response.data.length
            })
        })
    }
}

export function salvar( tarefa ){
    return dispatch => {
        http.post('/tarefas', tarefa, {
            headers: {'x-tenant-id' : localStorage.getItem('email') }
        })
            .then( response => {
                dispatch({
                    type: actions.ADD,
                    tarefa: response.data
                })
            })
    }
}

