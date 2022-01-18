import React, {Component} from "react";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName : this.props.firstName,
            lastName : this.props.lastName,
            age : this.props.age,
            hairColor : this.props.hairColor
        };
    }

    render() {

        return (
            
            <div>
                <h1>{this.state.lastName}, {this.state.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={ () => {
                    this.setState({ age: (this.state.age += 1) })
                    console.log(this.state.age);}}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
            </div>
        );
    }
}
export default Main