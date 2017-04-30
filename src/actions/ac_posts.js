import axios from 'axios'
import {FETCH_POSTS, API_URL} from '../constants'

export const fetch_posts = () => {
    const posts = axios.get(`${API_URL}/posts`);

    return {
        type: FETCH_POSTS,
        payload: posts
    }
}