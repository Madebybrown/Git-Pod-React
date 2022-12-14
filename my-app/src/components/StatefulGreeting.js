import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttontext: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttontext: "Enter!",
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()} >{this.state.buttontext}</button>
            </div>
        )
    }
}

export default StatefulGreeting;