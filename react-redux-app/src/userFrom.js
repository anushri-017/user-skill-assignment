import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import {createData} from './actions/index';
import {connect} from 'react-redux';
import ShowData from "./showData";


class Userform extends Component {
    constructor(props){
        super(props)
        this.state ={
            userid: '',
            fullname:'',
            phone: '',
            email: '',
            skills: ''
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
    handleinputskill = event => {
        this.setState({ skills: event.target.value })
    }
    handlesubmit = e => {
        e.preventDefault();
        if (this.state.userid === '' || this.state.fullname === '' ||
            this.state.phone === '' || this.state.email === '' || this.state.skills === '')
            console.log(this.state)
            this.props.createData(this.state);
        }
    
    render() {
        console.log(this.props.createData)
        return (
            <>
                <div className= "card border-0 shadow"> 
                <div className = "border border-dark rounded" >
                    <form>
                    <div className = "form-group">        
                        <h1 className='text-light bg-info'>SUBMIT USER DETAILS</h1><hr className='line' /> 
                        <label className='text-success text-uppercase font-weight-bold label'>User ID:</label>
                        <input className='input form-control border-dark font-weight-italic' type='number' value={this.props.userid} onChange={this.handleinputid} placeholder = "Enter your Userid" required /><br/>
                        <label className='text-success text-uppercase font-weight-bold label' >Full Name:</label>
                        <input className='input form-control border-dark font-weight-italic' value={this.props.fullname} onChange={this.handlefullname} placeholder = "Enter your fullName " type='text' required /><br/>
                        <label className='text-success text-uppercase font-weight-bold label'>Phone:</label>
                        <input className='input form-control border-dark font-weight-italic' value={this.props.phone}  onChange={this.handleinputphone} placeholder = "Enter your Phone" type='number' required /><br/>
                        <label className='text-success text-uppercase font-weight-bold label'>E-Mail ID:</label>
                        <input className='input form-control border-dark font-weight-italic' value={this.props.email} onChange={this.handleinputemail} placeholder = "Enter your Email-id" type='text' required /><br/>
                        <label className='text-success text-uppercase font-weight-bold label'>Skills:</label>
                        <input className='input form-control border-dark font-weight-italic' value={this.props.skills} onChange={this.handleinputskill} placeholder = "Enter your Skills" type='text' required /><br/>
                        <button className='bn btn-primary' onClick={this.handlesubmit}>SUBMIT</button>
                        <br/>
                    </div>
                    </form>
                    <p className = "text-dark bg-warning"><i>Click Below to Veiw Users Data</i></p>
                    <BrowserRouter>
                    <button className ='btn btn-success'> 
                    <Link to = '/getdata' className = "text-white">GetData</Link>
                    </button>
                    <Switch>
                   <Route path='/getdata' component = {ShowData}/>
                    </Switch>                   
                    </BrowserRouter>
                </div></div>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {       
        createData:(data) => dispatch(createData(data))
    }
}


const mapStateToProps = (state) => {
    return{
        users:state.users,
        getupdate:state.getupdate
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Userform);