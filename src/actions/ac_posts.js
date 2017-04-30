import axios from 'axios'
import {FETCH_POSTS, GET_POST, CREATE_POST, API_URL} from '../constants'

export const fetch_posts = () => {
    const posts = axios.get(`${API_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: posts
    }
}

export const get_post = (id) => {
    const post = axios.get(`${API_URL}/posts/${id}`);

    return {
        type: GET_POST,
        payload: post
    }
}

export const create_post = (values, callback) => {
    const request = axios.post(`${API_URL}/posts`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}