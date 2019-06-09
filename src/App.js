import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
//import App from './App'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield:
                event.target.value
        });
    }



    render() {
        // const {robots, searchfield} = this.state; I can erase next 3 "this.state"
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (!this.state.robots.length) {   //robots.lenght is igual zero
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc f4'>
                    <h1>RoboFriend</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App