import * as types from './actionTypes';
const initialState = {
  events: [],
  isLoading: false,
  isError: false,
};

export const appReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type){
    case types.GET_REQUEST:
      return{
        ...state,
        isLoading: true,
        isError: false,
      }
      case types.GET_SUCCESS:
      return{
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      }
      case types.GET_FAILURE:
      return{
        ...state,
        isLoading: false,
        isError: true,
      }
      default: {
        return state
      }
  }
};
