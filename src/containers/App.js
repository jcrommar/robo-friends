import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import MainPage from '../components/MainPage';

import './App.css'; 

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => { //triggers the action actions.js
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), // will receive text
        onRequestRobots: () => dispatch(requestRobots())
    } 
}


class App extends Component {
    render() {
        return <MainPage { ...this.props }/>
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);  //Higher order function-components - runs another function inside a function