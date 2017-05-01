import {FETCH_POSTS, GET_POST, DELETE_POST} from '../constants'

const normalizePosts = (arr) => {
    const posts = {};

    for (let i=0; i<arr.length; i++) {
        const el = arr[i];
        const id = el._id;
        delete el._id;
        posts[id] = el;
    }

    return posts
};

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return normalizePosts(action.payload.data);

        case GET_POST:
            return {...state, [action.payload.data._id]: action.payload.data};

        case DELETE_POST:
            const updatedState = state;
            delete updatedState[action.payload];
            return updatedState;

        default:
            return state;
    }
}