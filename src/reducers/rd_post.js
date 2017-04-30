import {GET_POST} from '../constants'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_POST:
            console.log("---GET_POST", action.payload.data);
            return action.payload.data;

        default:
            return state;
    }
}