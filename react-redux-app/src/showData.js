import React from 'react';
import { connect } from 'react-redux';
import { getdata, deletedata,editData } from './actions/index';
import {Link} from 'react-router-dom';


const mapStateToProps = state => {
    return {
        users: state.users
    }
};


const mapDispatchToProps = dispatch => {
    return {
        getdata: () => dispatch(getdata()),
        deletedata: (userid) => dispatch(deletedata(userid)),
        editData: (userid) => dispatch(editData(userid))
    }
}

class ShowData extends React.Component {

    componentDidMount() {
        this.props.getdata();
    }

    deleteUser = (userid) => {
      alert('Are you Sure, you want to delete user ?')
        console.log(userid)
        this.props.deletedata(userid)
    }

    editUser = (userid) => {
        console.log(userid)
        this.props.editData(userid)
    }

    render() {
        console.log(this.props.users)
        return (
            <>
                <div>
                    <h2><b> SHOWING USERS DATA</b></h2>
                    <table className='table '>
                        <thead>
                            <tr>
                                <th className='tr'>S.No:</th>
                                <th className="tr" >User_Id</th>
                                <th className="tr">FULLNAME</th>
                                <th className="tr">PHONE</th>
                                <th className="tr" >E-MAIL</th>
                                <th className="tr">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((users, index) => (
                                <tr className='tr' key={index}>
                                    <td className="tr">{index + 1}</td>
                                    <td className="tr">{users.userid}</td>
                                    <td className="tr">{users.fullname}</td>
                                    <td className="tr">{users.phone}</td>
                                    <td className="tr">{users.email}</td>
                                    <td>
                                        <button className="btn btn-danger ml-2 py-1" onClick={() => { this.deleteUser(users.userid) }}>DELETE </button>
                                        <button className='btn btn-warning ml-2 py-1' onClick={() => { this.editUser(users.userid)}}>
                                          <Link to = '/editUser'>EDIT</Link>
                                          </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowData);

