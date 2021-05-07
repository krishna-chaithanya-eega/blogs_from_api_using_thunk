import {combineReducers} from 'redux';



import PostsReducer from './PostsReducer';
import UsersReducer from './UsersReducer'

const reducer = combineReducers({
    posts:PostsReducer,
    users:UsersReducer
    

})

export default reducer;