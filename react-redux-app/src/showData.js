import React from 'react';
import { connect } from 'react-redux';
import { getdata, deletedata} from './actions/index';
import{BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import EditUser from './editUser';

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getdata: () => dispatch(getdata()),
        deletedata: (id) => dispatch(deletedata(id)),
       
    }
}
class ShowData extends React.Component {

    componentDidMount() {
        this.props.getdata();
    }

    deleteUser = (userid) => {
        this.props.deletedata(userid)
    }
   
    render() {
        console.log(this.props.users)
        return (
            <>
                <div>
                    <h2><b>USER_DATA</b></h2>
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
                                        <BrowserRouter>
                                        <button className ='btn btn-warning ml-2 py-1'> 
                                        <Link to = '/editUser' target className = "text-white">Edit</Link>
                                        </button>
                                       <Switch>
                                        <Route exact path = '/editUser' component = {EditUser}/>
                                        </Switch>
                                        </BrowserRouter>
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

