import React, { Component} from 'react';
class Form extends Component{
 initalState = {
firstName: "",
lastName:"",
};

state = this.initalState;


handleChange = (event) => { 
const {name, value} = event.target

this.setState({
    [name]: value,
})
}

submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)}
render (){
const { firstName, lastName} = this.state;

return(
    <form>
   <label htmlFor="firstName">First Name</label>
    <input type ="text" name="firstName" id="firstName" value={firstName}
    onChange={this.handleChange} />
    <label htmlFor="lastName">Last Name</label>
    <input type ="text" name="lastName" id="lasttName" value={lastName}
    onChange={this.handleChange} />
    <input type="button" value ="Submit" onClick = {this.submitForm}/>
    </form>
);



}



    
}

export default Form;