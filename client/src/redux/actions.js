
import { ADD_ITEM, DELETE_ITEM, ERROR, GET_ITEMS, LOADING } from './actionTypes'
import axios from 'axios'

export const getItems = (items) => {
    return {
        type: GET_ITEMS,
        payload: {
            items
        }
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: {
            id
        }
    }
}

export const addItem = (newItem) => {
    return {
        type: ADD_ITEM,
        payload: {
            newItem
        }
    }
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}
export const errorHandler = (error) => {
    return {
        type: ERROR,
        payload: {
            error
        }
    }
}

export const fetchData = () => dispatch => {
    dispatch(setLoading())
    axios.get('/routes/api')
        .then(res => {
            console.log(res)
            dispatch(getItems(res.data))
        })
        .catch(error => {
            // dispatch(errorHandler(error))
            console.log(error)
        })
}

export const addData = (newItem) => dispatch => {
    axios.post('routes/api', newItem)
        .then(res => {
            console.log(res)
            dispatch(addItem(newItem))
        })
        .catch(error => {
            console.log(error)
        })

}

export const deleteData = (id) => dispatch => {
    axios.delete(`routes/api/${id}`)
        .then(res => {
            dispatch(deleteItem(id))
        })
        .catch(error => {
            console.log(error)
        })
}