import axios from 'axios';
import { CREATE_DATA, UPDATE_DATA, DELETE_DATA, GET_DATA, GET_TO_UPDATE, CREATE_TAGS } from '../constants/action-types'


const create = () => {
    return {
        type: CREATE_DATA
    }
}
const createtags = () => {
    return {
        type: CREATE_TAGS
    }
}

const get = (data) => {
    return {
        type: GET_DATA
        , payload: data
    }
}

const Update = (dataa) => {
    return {
        type: UPDATE_DATA,
        payload: dataa
    }
}

const Delete = () => {
    return {
        type: DELETE_DATA
    }
}


const getToUpdate = (data) => {
    console.log(data)
    return {
        type: GET_TO_UPDATE,
        payload: data
    }
}

export function createData(data) {
    console.log("Posting data on Database")
    return function (dispatch) {
        axios.post("http://localhost:4000/postdata", data)
        dispatch(create()) 
    }
}

export function createtag(data) {
    console.log("Posting data on Database")
    return function (dispatch) {
        axios.post("http://localhost:4000/postdata", data)
        dispatch(createtags())
      
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

export function updatedata(data) {
    console.log(data)
    return function (dispatch) {
        axios.put(`http://localhost:4000/updateuserdata/${data.userid}`,data)
            .then(res => {
                const  dataa= res.dataa;
                dispatch(Update(dataa))
            })
    }
}


export function deletedata(userid) {
    console.log('deleting data of id :' + (userid))
    return  function (dispatch) {
         fetch(`http://localhost:4000/deleteuserdata/${userid}`, { method: "DELETE" })
        dispatch(Delete())
    }
}


export function editData(userid) {
    console.log('getting id from editData function: ' + (userid))
    return function (dispatch) {
        fetch(`http://localhost:4000/gettoupdate/${userid}`)
            .then((response) => response.json())
            .then(data => dispatch(getToUpdate(data)))
    }
}