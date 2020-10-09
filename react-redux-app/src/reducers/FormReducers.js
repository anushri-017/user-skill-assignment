import {CREATE_DATA,UPDATE_DATA,DELETE_DATA,GET_DATA} from '../constants/action-types';


const initialState = {
    users:[]
}

const formReducers = (state = initialState,action)=>{
    switch (action.type){
        case GET_DATA :
            return {
                ...state,
                users:action.payload
                  }
        
        case CREATE_DATA :
            return {
                ...state
            }
        case UPDATE_DATA :
            return{
                ...state,
                users:action.payload
            }
        case DELETE_DATA:
             return {
                 ...state, 
             } 
         default:
             return state;

    }
};

export default formReducers;