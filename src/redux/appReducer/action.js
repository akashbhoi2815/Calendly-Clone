import axios from 'axios';
import * as types from './actionTypes'

export const getEventData = (params) => (dispatch)=>{
    dispatch({type:types.GET_REQUEST});
    return axios.get(`https://calendlyauth.herokuapp.com/events`,params)
    .then((res)=>{
        console.log(res.data);
        return dispatch({type: types.GET_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        console.log(err);
        return dispatch({type: types.GET_FAILURE});
    })
}

export const deleteEventData = (id) => (dispatch) =>{
    dispatch({type:types.DELETE_REQUEST});
    return axios.delete(`https://calendlyauth.herokuapp.com/events/${id}`)
    .then(res=>{
        alert("Event Deleted")
       return dispatch(({type: types.DELETE_SUCCESS, payload:res.data}))
    })
    .catch(err=>{
        console.log(err);
        return dispatch({type: types.DELETE_FAILURE});
    })
}

export const editEventData = (id, payload) => (dispatch)=>{
    dispatch({type: types.EDIT_REQUEST});
    return axios.patch(`https://calendlyauth.herokuapp.com/events/${id}`, payload)
    .then(res=>{
        return dispatch({type: types.EDIT_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err);
        return dispatch({type:types.EDIT_FAILURE});
    })
}

export const addEventData = (payload) =>(dispatch) =>{
    dispatch({type: types.ADD_REQUEST});
    return axios.post('https://calendlyauth.herokuapp.com/events', payload)
    .then((res)=>{
        return dispatch({type:types.ADD_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        console.log(err);
        return dispatch({type: types.ADD_FAILURE});
    })   
}