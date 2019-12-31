import { useReducer } from 'react'

const STATE_INICIAL = {
    resultado: ''
}
const somaReducer = ( state = STATE_INICIAL, action ) => {
   console.log('action executada: ', JSON.stringify(action))
   switch( action.type ){
        case 'SUBTRACAO':
        case 'SOMA':
            return {...state, resultado: action.payload }      
        default:
            return state;
   }
}

const useStore = () => useReducer(somaReducer, STATE_INICIAL )
export default useStore
