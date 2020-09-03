import React from 'react';
class Task3 extends React.Component {
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
            <h1>Task 1.3 - Counter with bounds</h1>
            <h2>
                Button was clicked <br></br>
                <button onClick={this.handleClickMinus} disabled={this.state.counter === this.props.min}> - </button>
                {this.state.counter}
                <button onClick={this.handleClickPlus} disabled={this.state.counter === this.props.max}> + </button>
                <br></br>times
            </h2>
        </div>
        );
    }
}
  
function handleClickMinus(){
    if(this.state.counter > this.props.min)
    {
        this.setState(() => ({
            counter: this.state.counter--
        }))
    }
}

function handleClickPlus(){
    if(this.state.counter < this.props.max)
    {
        this.setState(() => ({
            counter: this.state.counter++
        }))
    }
}
export default Task3;