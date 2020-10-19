import React from 'react';
import "./App.css";
import { Route, Router, NavLink, Switch } from 'react-router-dom';
import history from './history';
import showData from './showData';
import EditUser from './EditUserData';
import Userform from './userFrom';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Router history={history}>
        <Navigation/>
          <Main />
        </Router>
      </div>
    </div>
  )
}


const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-success">
    <ul className="navbar-nav mr-2 py-1">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Add User</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/getdata">ShowData</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/editUser">EditUser</NavLink></li>
    </ul>
  </nav>
);



const Main = () => (
  <Switch>
    <Route exact path='/' component={Userform} />
    <Route exact path='/getdata' component={showData} />
    <Route exact path='/editUser' component={EditUser} />
  </Switch>
)

export default App;
