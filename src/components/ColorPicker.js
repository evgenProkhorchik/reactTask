import React from 'react';
import uniqueId from 'react-html-id';

class ColorPicker extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            red: parseInt('0x'+ this.props.value.substr(0, 2)),
            green: parseInt('0x'+ this.props.value.substr(2, 2)),
            blue: parseInt('0x'+ this.props.value.substr(4, 2))
        }

        uniqueId.enableUniqueIds(this)
        this.handleClickMinus = this.handleClickMinus.bind(this)
        this.handleClickPlus = this.handleClickPlus.bind(this)
    }

    handleClickMinus(id, callback){
        if(id.includes('red')){
            if(this.state.red >= 0x00){
            this.setState(() => ({
                red: this.state.red--
            }))
            }
            callback((this.state.red - 1).toString(16))
        }
        if(id.includes('green')){
            if(this.state.green >= 0x00){
            this.setState(() => ({
                green: this.state.green--
            }))
            }
            callback((this.state.green - 1).toString(16))
        }
        if(id.includes('blue')){
            if(this.state.blue >= 0x00){
            this.setState(() => ({
                blue: this.state.blue--
            }))
            }
            callback((this.state.blue - 1).toString(16))
        }
    }
    
    handleClickPlus(id, callback){
        if(id.includes('red')){
            if(this.state.red <= 0xff){
                this.setState(() => ({
                    red: this.state.red++
                }))
            }
            callback((this.state.red + 1).toString(16))
        }
        if(id.includes('green')){
            if(this.state.green <= 0xff){
                this.setState(() => ({
                    green: this.state.green++
                }))
            }
            callback((this.state.green + 1).toString(16))
        }
        if(id.includes('blue')){
            if(this.state.blue <= 0xff){
                this.setState(() => ({
                    blue: this.state.blue++
                }))
            }
            callback((this.state.blue + 1).toString(16))
        }
    }

    render(){
        const hexColor = '#' + this.state.red.toString(16) + this.state.green.toString(16) + this.state.blue.toString(16)
        const divStyle = {
            width: '50px',
            height: '30px',
            backgroundColor: hexColor
            
        }

        return (  
        <div>
            <h1>Task 1.8</h1>
            <h2>
                Red<br></br>
                <button onClick={this.handleClickMinus.bind(this, this.getUniqueId('red'), this.props.onChange)} disabled={this.state.red === 0x00}> - </button>
                {this.state.red.toString(16)}
                <button onClick={this.handleClickPlus.bind(this, this.getUniqueId('red'), this.props.onChange)} disabled={this.state.red === 0xff}> + </button>
            </h2>
            <h2>
                Green <br></br>
                <button onClick={this.handleClickMinus.bind(this, this.getUniqueId('green'), this.props.onChange)} disabled={this.state.green === 0x00}> - </button>
                {this.state.green.toString(16)}
                <button onClick={this.handleClickPlus.bind(this, this.getUniqueId('green'), this.props.onChange)} disabled={this.state.green === 0xff}> + </button>
            </h2>
            <h2>
                Blue <br></br>
                <button onClick={this.handleClickMinus.bind(this, this.getUniqueId('blue'),this.props.onChange)} disabled={this.state.blue === 0x00}> - </button>
                {this.state.blue.toString(16)}
                <button onClick={this.handleClickPlus.bind(this, this.getUniqueId('blue'), this.props.onChange)} disabled={this.state.blue === 0xff}> + </button>
            </h2>
            <div style={divStyle}></div>
        </div>
        
        );
    }
}

export default ColorPicker;