// src/redux/reducers/product.js
const initialState = {
    atletes: [],
    atlete: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES' :
        return {
            ...state,
            atletes: action.atletes
        }
        case 'VIEW_ARTICLE':
        return {
            ...state,
            atlete: action.atlete
        }
        case 'CLAP_ARTICLE':
        let atlete = Object.assign({}, state.atlete)
        atlete.claps++
        console.log(atlete)
        return {
            ...state,
            atlete: atlete
        }
        default:
            return state
    }
}