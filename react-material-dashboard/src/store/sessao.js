const actions = {
    LOGAR: 'SESSAO_LOGAR'
}

export const sessaoReducer = ( state = { email: ''}, action) => {
    switch(action.type){
        case actions.LOGAR: 
            return {...state, email: action.email };
        default:
            return state;
    }
}

export function logar(email){
    return {
        type: actions.LOGAR,
        email: email
    }
}