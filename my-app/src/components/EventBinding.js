import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttontext: "Exit",
        };
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //         buttontext: "Enter!",
    //     });
    //     console.log(this.state.introduction);
    // }

    handleClick = () => {
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
                {/* <button onClick={() => this.handleClick()} >{this.state.buttontext}</button> */}
                {/* <button onClick={this.handleClick.bind(this)} >{this.state.buttontext}</button> */}
                <button onClick={this.handleClick} >
                    {this.state.buttontext}
                </button>
            </div>
        )
    }
}

export default EventBinding;