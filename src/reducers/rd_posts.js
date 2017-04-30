import {FETCH_POSTS} from '../constants'

const normalizePosts = (arr) => {
    const posts = {};

    for (let i=0; i<arr.length; i++) {
        const el = arr[i];
        const id = el._id;
        delete el._id;
        posts[id] = el;
    }

    console.log("---normalizedPosts", posts);
    return posts
}

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            console.log("---", action.payload.data);
            return normalizePosts(action.payload.data)

        default:
            return state;
    }

}