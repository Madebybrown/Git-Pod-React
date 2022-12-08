import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello, {props.greeting} {props.name}, Your are {props.age} years old, right?</h1>
}

export default FunctionalGreetingWithProps;