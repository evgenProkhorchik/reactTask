import React, { useCallback } from 'react';
class Task5 extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            counter: this.props.value===undefined ? 0 : this.props.value,
        }

        this.handleClickMinus = this.handleClickMinus.bind(this)
        this.handleClickPlus = this.handleClickPlus.bind(this)
    }

    handleClickMinus(callback){
        this.setState(() => ({
            counter: this.state.counter--
        }))
        callback(this.state.counter - 1)
    }

    handleClickPlus(callback){
        this.setState(() => ({
            counter: this.state.counter++
        }))
        callback(this.state.counter + 1)
    }
    
    render(){
        return (
        <div>
            <h1>Task 1.5 – Counter with callback</h1>
            <h2>
                Button was clicked <br></br>
                <button onClick={this.handleClickMinus.bind(this, this.props.onChange)}> - </button>
                {this.state.counter}
                <button onClick={this.handleClickPlus.bind(this, this.props.onChange)}> + </button>
                <br></br>times
            </h2>
        </div>
        );
    }
}
   
export default Task5;