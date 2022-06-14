// import {DEFAULT_ACTION} from "../actions/type";

const init = {
    data: 'stored data'
};

const appReducer = (state = init, action) => {
    switch (action.type) {
        case 'DEFAULT_ACTION': {
            return state;
        }
        default:
            return state;
    }
};

export default appReducer