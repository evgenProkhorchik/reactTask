import React from 'react';
class Task2 extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            counter: 0
        }
        
        this.handleClickMinus = handleClickMinus.bind(this)
        this.handleClickPlus = handleClickPlus.bind(this)
    }
  
    render(){
        return (
        <div>
            <h1>Task 1.2 - Counter +-</h1>
            <h2>
                Button was clicked <br></br>
                <button onClick={this.handleClickMinus}> - </button>
                {this.state.counter}
                <button onClick={this.handleClickPlus}> + </button>
                <br></br>times
            </h2>
        </div>
        );
    }
}
  
function handleClickMinus(){
    this.setState(() => ({
    counter: this.state.counter--
    }))
}
function handleClickPlus(){
    this.setState(() => ({
    counter: this.state.counter++
    }))
}
export default Task2;