import {CREATE_DATA,UPDATE_DATA,DELETE_DATA,GET_DATA, GET_TO_UPDATE} from '../constants/action-types';


const initialState = {
    users:[],getupdate:[]
}

const formReducers = (state = initialState,action)=>{
    switch (action.type){
        case GET_DATA :
            return {
                users:action.payload
                  }
        case CREATE_DATA :
            return {
                ...state
            }
        case UPDATE_DATA :
            return{
                ...state
            }
        case GET_TO_UPDATE:
            return{
                ...state,
                 getupdate:action.payload
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