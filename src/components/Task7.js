import React from 'react';
class Task7 extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            red: this.props.red===undefined ? 0 : this.props.red,
            green: this.props.green===undefined ? 0 : this.props.green,
            blue: this.props.blue===undefined ? 0 : this.props.blue
        }
    }
  
    render(){
        const rgb = 'rgb(' + this.state.red + ', ' + this.state.green + ', ' + this.state.blue + ')'
        const divStyle = {
            width: '50px',
            height: '30px',
            backgroundColor: rgb
        }
        return (
        <div>
            <h1>Task 1.7</h1>
            <div style={divStyle}></div>
        </div>
        );
    }
}
   
export default Task7;