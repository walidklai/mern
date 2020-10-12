import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, LOADING, ERROR } from './actionTypes'
import { v4 } from 'uuid'

const initialState = {
    items: [],
    loading: false,
    error: ''
}

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ITEMS:
            return {
                items: action.payload.items,
                loading: false,
                error: ''
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(el => el._id !== action.payload.id)
            }
        case ADD_ITEM:
            return {
                items: [...state.items, action.payload.newItem],
                loading: false,
                error: ''
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                items: [],
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default shoppingReducer