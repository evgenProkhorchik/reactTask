import React from 'react';
class Task4 extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            counter: this.props.value===undefined ? 0 : this.props.value
        }

        this.handleClickMinus = handleClickMinus.bind(this)
        this.handleClickPlus = handleClickPlus.bind(this)
    }
  
    render(){
        return (
        <div>
            <h1>Task 1.4 - Counter with init state</h1>
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
export default Task4;