import axios from 'axios'
import {FETCH_POSTS, GET_POST, CREATE_POST, DELETE_POST, API_URL} from '../constants'

export const fetch_posts = () => {
    const postsPromise = axios.get(`${API_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: postsPromise
    }
}

export const get_post = (id) => {
    const postPromise = axios.get(`${API_URL}/posts/${id}`);

    return {
        type: GET_POST,
        payload: postPromise
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

export const delete_post = (id, callback) => {
    const request = axios.delete(`${API_URL}/posts/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}