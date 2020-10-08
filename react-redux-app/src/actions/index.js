
import axios from 'axios';
import { CREATE_DATA, GET_TO_UPDATE, UPDATE_DATA, DELETE_DATA, GET_DATA, INPUT_DATA } from '../constants/action-types'


const create = () => {
    return {
        type: CREATE_DATA
    }
}

const getupdate = (data) => {
    console.log(data)
    return {
        type: GET_TO_UPDATE,
        payload: data
    }
}

const get=(data)=> {
    return {
        type: GET_DATA,
        payload: data
    }
}
const Delete = () => {
    return {
        type: DELETE_DATA
    }
}

const Update = () => {
    return {
        type: UPDATE_DATA
        
    }
}
export const stateData = (data) =>{
    return{
        type:INPUT_DATA,
        payload:data
    }
}


export function createData(data) {
    console.log("Posting data on Database")
    return function (dispatch) {
        axios.post("http://localhost:4000", data)
        dispatch(create())
    }
}

export function getdata() {
    console.log("Getting users data")
    return function (dispatch) {
        fetch("http://localhost:4000/getuserdata")
            .then((response) => response.json())
            .then(data => dispatch(get(data)))
    }
}

export function updatedata(id) {
    console.log("updating data of id :"+(id))
    return function (dispatch) {
        axios.put("http://localhost:4000/updateuserdata/" + id)
        dispatch(Update())
    }
}
export function editUser(id) {
    console.log('getting data from editUser function of id :'+(id))
    return function (dispatch) {
        fetch("http://localhost:4000/gettoupdate/"+id,{method:"GET", mode:'CORS'})
            .then((response) => response.json())
            .then(data => dispatch(getupdate(data)))
            /*.then ((data) => (console.log(data))*/     
    }
}

export function deletedata(id) {
    console.log('deleting data of id :' + (id))
    return async function (dispatch) {
        await fetch("http://localhost:4000/deleteuserdata/" + id, { method: "DELETE" })
        dispatch(Delete())
    }
}

