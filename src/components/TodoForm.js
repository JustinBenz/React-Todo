import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            textInput: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            textInput: e.target.value
        });
    }
    submitHandle = (e) => {
        this.props.addHandle(this.state.textInput)
        e.preventDefault();
    }
    clearHandle = (e) => {
        this.setState({
            textInput: ""
        })
    }
    render() {
        return(
            <>
            <form value={this.state.textInput} onSubmit={this.submitHandle}>
                <input onChange={this.handleChange} placeholder="todo..."></input>
                <button name="sbmt-btn">Submit</button>
                <button name="clr-btn">Clear</button>
            </form>
            </>
            );
        }
    } 
export default TodoForm;