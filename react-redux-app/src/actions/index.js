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

const Update = (data) => {
    return {
        type: UPDATE_DATA,
        payload: data
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
    console.log("updating data of id :" + (data))
    return function (dispatch) {
        axios.put(`http://localhost:4000/updateuserdata/${data.userid}`)
            .then(res => {
                const data = res.data;
                dispatch(Update(data))
            })
    }
}

export function deletedata(id) {
    console.log('deleting data of id :' + (id))
    return async function (dispatch) {
        await fetch(`http://localhost:4000/deleteuserdata/${id}`, { method: "DELETE" })
        dispatch(Delete())
    }
}


export function editData(id) {
    console.log('getting id from editData function: ' + (id))
    return function (dispatch) {
        fetch(`http://localhost:4000/gettoupdate/` + (id))
            .then((response) => response.json())
            .then(data => dispatch(getToUpdate(data)))
    }
}