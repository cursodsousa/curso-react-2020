import { combineReducers } from 'redux'

import { tarefaReducer } from './tarefas'
import { sessaoReducer } from './sessao'

const mainReducer = combineReducers({
    tarefas: tarefaReducer,
    sessao: sessaoReducer
})

export default mainReducer;