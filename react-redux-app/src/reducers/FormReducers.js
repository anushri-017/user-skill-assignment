import { CREATE_DATA, UPDATE_DATA, DELETE_DATA, GET_DATA, GET_TO_UPDATE, CREATE_TAGS } from '../constants/action-types';


const initialState = {
    users:[],getToUpdate:{userid:'',fullname:'',phone:'',email:''},tags:[]
}
const formReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                users:action.payload
            }
        case CREATE_TAGS:
            return{
                ...state
            }
        case CREATE_DATA:
            return {
                ...state
            }
        case GET_TO_UPDATE:{
            return{
                ...state,
                getToUpdate:action.payload
            }
        }
        case UPDATE_DATA:
            return {
                ...state,
                users: action.payload
            }
        case DELETE_DATA:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default formReducers;