import React, { Component } from 'react';
import { createData } from './actions/index';
import { connect } from 'react-redux';
import SkillTags from './SkillTag';

class Userform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid: '',
            fullname: '',
            phone: '',
            email: '',
            skills:''
        }
    }
    handleinputid = event => {
        this.setState({ userid: event.target.value })

    }
    handlefullname = event => {
        this.setState({ fullname: event.target.value })

    }
    handleinputphone = event => {
        this.setState({ phone: event.target.value })

    }
    handleinputemail = event => {
        this.setState({ email: event.target.value })
    }
    handleinputskills = event => {
        this.setState({ skills: event.target.value })
    }

    handlesubmit = e => {
        e.preventDefault();
        if (this.state.userid === '' || this.state.fullname === '' || this.state.phone === '' || this.state.email === ''||this.state.skills)
            console.log(this.state)
        this.props.createData(this.state);
    }

    render() {
        console.log(this.props.createData)
        return (
            <>
                <div className="card border-0 shadow">
                    <div className="border border-dark rounded" >
                        <form>
                            <div className="form-group">
                                <hr className='line' />
                                <h1 className='text-light bg-info'>SUBMIT USER DETAILS</h1> <hr className='line' />
                                <label className='text-success text-uppercase font-weight-bold label'>User ID:</label>
                                <input className='input form-control border-dark font-weight-italic'
                                 type='number'
                                  value={this.state.userid} 
                                onChange={this.handleinputid} 
                                placeholder="Enter your Userid" required />
                                <br />
                                <label className='text-success text-uppercase font-weight-bold label' >Full Name:</label>
                                <input className='input form-control border-dark font-weight-italic' 
                                value={this.state.fullname} 
                                onChange={this.handlefullname}
                                 placeholder="Enter your fullName "
                                  type='text' required />
                                  <br />
                                <label className='text-success text-uppercase font-weight-bold label'>Phone:</label>
                                <input className='input form-control border-dark font-weight-italic'
                                 value={this.state.phone} 
                                onChange={this.handleinputphone}
                                 placeholder="Enter your Phone" 
                                 type='number' required />
                                 <br />
                                <label className='text-success text-uppercase font-weight-bold label'>E-Mail ID:</label>
                                <input className='input form-control border-dark font-weight-italic'
                                 value={this.state.email} 
                                onChange={this.handleinputemail} 
                                placeholder="Enter your Email-id"
                                 type='email' required />
                                 <br/>
                                <label className='text-success text-uppercase font-weight-bold label'>Skills:</label>
                                <input className='input form-control border-dark font-weight-italic' 
                                value={this.state.skills} 
                                onChange={this.handleinputskills} 
                                placeholder="Enter your Skills" 
                                type='text' required />
                                <br/>
                                <label className='text-success text-uppercase font-weight-bold label'>Tags:</label>
                                <SkillTags/>
                                <button className='bn btn-primary mt-4 py-1' onClick={this.handlesubmit}>SUBMIT</button>                        
                            </div> 
                        </form>
                    </div></div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createData: (data) => dispatch(createData(data))
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userform);