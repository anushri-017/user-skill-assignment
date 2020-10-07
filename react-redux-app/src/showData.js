import React from 'react';
import { connect } from 'react-redux';
import { getdata, deletedata, updatedata, editUser } from './actions/index';



const mapStateToProps = state => {
    return {
        users: state.users,
        getupdate: state.getupdate
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getdata: () => dispatch(getdata()),
        deletedata: (id) => dispatch(deletedata(id)),
        updatedata: (id) => dispatch(updatedata(id)),
        editUser: (id) => dispatch(editUser(id))
    }
}
class ShowData extends React.Component {

    componentDidMount() {
        this.props.getdata();

    }

    deleteUser = (userid) => {
        this.props.deletedata(userid)
    }

    updateUser = (userid) => {
        this.props.updatedata(userid)
    }
    editUser = (userid) => {
        this.props.editUser(userid)
    }

    render() {
        console.log(this.props.users)
        return (
            <>
                <div>
                    <label>USER_DATA</label>
                    <table className='table '>
                        <thead>
                            <tr>
                                <th className="tr" >Userid</th>
                                <th className="tr">FullName</th>
                                <th className="tr">Phone</th>
                                <th className="tr" >Email</th>
                                <th className="tr">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map(users => (                               
                                <tr className='tr' key={users.userid}>
                                    <td className="tr">{users.userid}</td>
                                    <td className="tr">{users.fullname}</td>
                                    <td className="tr">{users.phone}</td>
                                    <td className="tr">{users.email}</td>
                                    <td>
                                        <button className="btn btn-danger ml-2 py-1" onClick={() => { this.deleteUser(users.userid) }}>DELETE </button>
                                        <button className="btn btn-warning ml-2 py-1" onClick={() => { this.updateUser(users.userid) }}>UPDATE</button>
                                        <button className="btn btn-info ml-2 py-1" onClick={() => { this.editUser(users.userid) }}>EDIT</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )}
}

    export default connect(mapStateToProps, mapDispatchToProps)(ShowData);

