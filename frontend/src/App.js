import { Route, Switch, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as actionCreators from './actions/index';

import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component{

	componentDidMount(){
		const token = localStorage.getItem('token');
		const user = JSON.parse(localStorage.getItem('user'));
		if( token && user ){
		  this.props.setLogin(user, token);
		  this.props.fetchFriendsAndChannels();
		  this.props.history.push('/login');
		}
		else this.props.history.push('/login');
		
	}

	handleLogOut = () => {
		this.props.setLogout();
		this.props.history.push('/login');
	}

	render(){
		const { isAuth } = this.props;
		return(
			<div className="app-box">
				<Switch>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/signup' component={Signup}/>
					<Route path='/' component={Dashboard} /> 
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		isAuth: state.auth.isAuth,
		user: state.auth.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setLogin: (user, token) => dispatch(actionCreators.setLogin(user, token)),
		setLogout: () => dispatch(actionCreators.setLogout()),
		fetchFriendsAndChannels: () => dispatch(actionCreators.fetchFriendsAndChannels())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
