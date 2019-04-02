import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css'; 


import { setSearchField, requestRobots } from '../actions';

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

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends.com</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    { isPending ? <h1>Loading</h1> :
                        <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    }
                    </Scroll>
                </div>
            );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);  //Higher order function-components - runs another function inside a function