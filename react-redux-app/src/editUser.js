import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatedata } from './actions/index';

class EditUser extends Component {

handleinputid = event => {this.setState({ userid: event.target.value })}
handlefullname = event => { this.setState({ fullname: event.target.value }) }
handleinputphone = event => { this.setState({ phone: event.target.value }) }
handleinputemail = event => { this.setState({ email: event.target.value }) }
handleinputskill = event => { this.setState({ skills: event.target.value }) }


handlesubmit = e => {
    e.preventDefault();
    const userid = this.props.users.userid;
    const fullname = this.state.fullname ? this.state.fullname:this.props.users.fullname;
    const phone = this.state.phone ? this.state.phone : this.props.users.phone;
    const email = this.state.email ? this.state.email : this.props.users.email;
    const skills = this.state.skills ? this.state.skills : this.props.users.skills;
    const users = {userid:userid,fullname:fullname,phone:phone,email:email,skills:skills}
    this.props.updatedata(users);
}

handleCancel = () =>{
    this.props.history.push('/');
}

render(){
    console.log(updatedata)
    return (
        <>
            <div>
                <div className="card border-0 shadow">
                    <div className="border border-dark rounded" >
                        <form>
                            <div className="form-group">
                                <hr className='line' />
                                <h1 className='text-dark bg-warning'>EDIT USER DETAILS</h1> <hr className='line' />
                                <label className='text-success text-uppercase font-weight-bold label'>User ID:</label>
                                <input className='input form-control border-dark font-weight-italic' type='number' defaultValue={this.props.users.userid}  onChange={this.handleinputid} placeholder="Enter your Userid" required /><br />
                                <label className='text-success text-uppercase font-weight-bold label' >Full Name:</label>
                                <input className='input form-control border-dark font-weight-italic' defaultValue={this.props.users.fullname} onChange={this.handlefullname} placeholder="Enter your fullName " type='text' required /><br />
                                <label className='text-success text-uppercase font-weight-bold label'>Phone:</label>
                                <input className='input form-control border-dark font-weight-italic'  defaultValue={this.props.users.phone} onChange={this.handleinputphone} placeholder="Enter your Phone" type='number' required /><br />
                                <label className='text-success text-uppercase font-weight-bold label'>E-Mail ID:</label>
                                <input className='input form-control border-dark font-weight-italic' defaultValue={this.props.users.email} onChange={this.handleinputemail} placeholder="Enter your Email-id" type='text' required /><br />
                                <label className='text-success text-uppercase font-weight-bold label'>Skills:</label>
                                <input className='input form-control border-dark font-weight-italic' defaultValue={this.props.users.skills} onChange={this.handleinputskill} placeholder="Enter your Skills" type='text' required /><br />
                                <button className='btn btn-success' onClick={this.handlesubmit}>UPDATE</button>
                                <br />
                                <button type="button" onClick={this.handleCancel} className="btn btn-info mt-2 py-1">Cancel</button>
                            </div>
                        </form>
                    </div></div>
            </div>
        </>
    )
}

}

const mapStateToProps = (state) =>({
    users:state.users
})

const mapDispatchToProps = (dispatch) =>({
     updatedata:(id) => dispatch(updatedata(id))
    });
 
export default connect(mapStateToProps,mapDispatchToProps)(EditUser);
