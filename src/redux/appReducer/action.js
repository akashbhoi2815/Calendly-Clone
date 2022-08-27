import axios from 'axios';
import * as types from './actionTypes'

export const getEventData = (params) => (dispatch)=>{
    dispatch({type:types.GET_REQUEST});
    return axios.get(`http://localhost:8080/events`,params)
    .then((res)=>{
        console.log(res.data);
        dispatch({type: types.GET_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type: types.GET_FAILURE});
    })
}

export const deleteEventData = (id) => (dispatch) =>{
    dispatch({type:types.DELETE_REQUEST});
    return axios.delete(`http://localhost:8080/events/${id}`)
    .then(res=>{
        dispatch(({type: types.DELETE_SUCCESS, payload:res.data}))
    })
    .catch(err=>{
        console.log(err);
        dispatch({type: types.DELETE_FAILURE});
    })
}

export const editProductData = (id, payload) => (dispatch)=>{
    dispatch({type: types.EDIT_REQUEST});
    return axios.patch(`http://localhost:8080/events/${id}`, payload)
    .then(res=>{
        dispatch({type: types.EDIT_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err);
        dispatch({type:types.EDIT_FAILURE});
    })
}

export const addEventData = (payload) =>(dispatch) =>{
    dispatch({type: types.ADD_REQUEST});
    return axios.post('http://localhost:8080/events', payload)
    .then((res)=>{
        dispatch({type:types.ADD_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type: types.ADD_FAILURE});
    })   
}