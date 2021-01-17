import _ from "lodash";
import { CREATE_STREAM, GET_STREAM, GET_STREAMS, UPDATE_STREAM, 
    DELETE_STREAM } from "../actionCreators/actionTypes";

    
const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case GET_STREAMS:
            return {...state, ..._.mapKeys(action.payload, "id")};    
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

export default streamReducer;