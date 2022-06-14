import {DEFAULT_ACTION} from "./type";

export const defaultAction = data => dispatch => {
    dispatch({
        type: DEFAULT_ACTION,
        data,
    });
};