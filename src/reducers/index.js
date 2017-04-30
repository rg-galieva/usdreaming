import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import posts from './rd_posts'
import post from './rd_post'

const rootReducer = combineReducers({
    post,
    posts,
    form: formReducer
});

export default rootReducer;