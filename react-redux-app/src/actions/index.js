
import axios from 'axios';
import { CREATE_DATA, UPDATE_DATA, DELETE_DATA, GET_DATA, REPLACE_DATA  } from '../constants/action-types'


const create = () => { return {type: CREATE_DATA}}

const get=(data)=> {return {type: GET_DATA,payload: data}}

const Update = (data) => {return {type: UPDATE_DATA,payload:data}}

const Delete = () => {return {type: DELETE_DATA}}

const replace = (data) =>{return{type:REPLACE_DATA,payload:data}}


export function createData(data) {
    console.log("Posting data on Database")
    return function (dispatch) {
        axios.post("http://localhost:4000/postdata", data)
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
        axios.put("http://localhost:4000/updateuserdata/" + id.json)
        .then (res =>{    
        const data = res.data;
            dispatch(Update(data))
            dispatch(replace())
        }
        )}
    }

export function deletedata(id) {
    console.log('deleting data of id :' + (id))
    return async function (dispatch) {
        await fetch("http://localhost:4000/deleteuserdata/" + id, { method: "DELETE" })
        dispatch(Delete())
    }
}

