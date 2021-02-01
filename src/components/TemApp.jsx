import React from 'react'
import { Link } from 'react-router-dom'

export default function TemApp(props) {
    return (
        <div>
            <div id="balance" style={props.budget > 500 ? { color: "green" } : { color: "red" }}>
                <p>   Your current balance : {props.budget} </p>
            </div>

            <div id='linksBar'>
                <div id='links'>
                    <Link to='transactions'> <span>Transactions</span></Link>
                    <Link to='operations'> <span>Add Operation</span></Link>
                    <Link to='Breakdown'> <span>Breakdown</span></Link>
                </div>
            </div>

        </div>
    )
}
