import React from 'react';
class Task1 extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            counter: 0
        }

        this.handleClick = handleClick.bind(this)
    }

    render(){
        return (
        <div>
            <h1>Task 1.1 - Counter</h1>
            <button onClick={this.handleClick}>Button was clicked: {this.state.counter} times </button>
        </div>
        );
    }
}

function handleClick(){
    this.setState(() => ({
    counter: this.state.counter++
    }))
}
export default Task1;
