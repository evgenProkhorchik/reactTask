import React from 'react';
import uniqueId from 'react-html-id';

class Task6 extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            red: this.props.red===undefined ? 0 : this.props.red,
            green: this.props.green===undefined ? 0 : this.props.green,
            blue: this.props.blue===undefined ? 0 : this.props.blue
        }
        uniqueId.enableUniqueIds(this)
        this.handleClickMinus = this.handleClickMinus.bind(this)
        this.handleClickPlus = this.handleClickPlus.bind(this)
    }

    handleClickMinus(id){
        if(id.includes('red')){
            if(this.state.red >= 0){
                this.setState(() => ({
                    red: this.state.red--
                }))
            }
        }
        if(id.includes('green')){
            if(this.state.green >= 0){
                this.setState(() => ({
                    green: this.state.green--
                }))
            }
        }
        if(id.includes('blue')){
            if(this.state.blue >= 0){
                this.setState(() => ({
                    blue: this.state.blue--
                }))
            }
        }
    }
    
    handleClickPlus(id){
        if(id.includes('red')){
            if(this.state.red <= 255){
                this.setState(() => ({
                    red: this.state.red++
                }))
            }
        }
        if(id.includes('green')){
            if(this.state.green <= 255){
                this.setState(() => ({
                    green: this.state.green++
                }))
            }
        }
        if(id.includes('blue')){
            if(this.state.blue <= 255){
                this.setState(() => ({
                    blue: this.state.blue++
                }))
            }
        }
    }

    render(){
        return (
        <div>
            <h1>Task 1.6 – RGB Counters</h1>
            <h2>
                Red<br></br>
                <button onClick={this.handleClickMinus.bind(this, this.getUniqueId('red'))} disabled={this.state.red === 0}> - </button>
                {this.state.red}
                <button onClick={this.handleClickPlus.bind(this, this.getUniqueId('red'))} disabled={this.state.red === 255}> + </button>
            </h2>
            <h2>
                Green <br></br>
                <button onClick={this.handleClickMinus.bind(this, this.getUniqueId('green'))} disabled={this.state.green === 0}> - </button>
                {this.state.green}
                <button onClick={this.handleClickPlus.bind(this, this.getUniqueId('green'))} disabled={this.state.green === 255}> + </button>
            </h2>
            <h2>
                Blue <br></br>
                <button onClick={this.handleClickMinus.bind(this, this.getUniqueId('blue'))} disabled={this.state.blue === 0}> - </button>
                {this.state.blue}
                <button onClick={this.handleClickPlus.bind(this, this.getUniqueId('blue'))} disabled={this.state.blue ===  255}> + </button>
            </h2>
        </div>
        );
    }
}
   
export default Task6;