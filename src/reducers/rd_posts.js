import {FETCH_POSTS} from '../constants'

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
            console.log("---FETCH_POSTS", action.payload.data);
            return normalizePosts(action.payload.data);

        default:
            return state;
    }
}