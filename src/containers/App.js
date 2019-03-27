import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'; 

class App extends Component {
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({ Robots: users})}); //delete to see loading...

    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.Robots.length === 0) {
            return <h1>Loading...</h1>
                } else {
                    return (
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends.com</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList Robots={filteredRobots} />
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                );
            }
        }
    }

export default App;