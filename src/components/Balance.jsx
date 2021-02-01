import React from 'react'

export default function TemApp(props) {
    return (
            <div id="balance" style={props.budget > 500 ? { color: "white" } : { color: "red" }}>
                <p>   Your current balance : {props.budget} </p>
            </div>
    )
}