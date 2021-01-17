import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAM, 
    GET_STREAMS, UPDATE_STREAM, DELETE_STREAM } from "./actionTypes";
import Axios from "../../apis/streams";
import history from "../../history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const {userId} = getState().auth;

        const response = await Axios.post("/streams", { ...formValues, userId });

        dispatch({type: CREATE_STREAM, payload: response.data});

        //Programmatic Navigation
        history.push("/");
    }
}

export const getStream = (id) => {
    return async (dispatch) => {
        const response = await Axios.get(`/streams/${id}`);

        dispatch({type: GET_STREAM, payload: response.data});
    }
}

export const getStreams = () => {
    return async (dispatch) => {
        const response = await Axios.get("/streams");

        dispatch({type: GET_STREAMS, payload: response.data});
    }
}

export const updateStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await Axios.patch(`/streams/${id}`, formValues);

        dispatch({type: UPDATE_STREAM, payload: response.data});

        history.push("/");
    }
}


export const deleteStream = (id) => {
    return async (dispatch) => {
        await Axios.delete(`/streams/${id}`);

        dispatch({type: DELETE_STREAM, payload: id});
    }
}