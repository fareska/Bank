import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Transaction extends Component {

    delete = () => this.props.delete(this.props.transaction._id)

    render() {
        let transaction = this.props.transaction

        return (
            <div style={transaction.amount > 0 ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
                <div><span className='amount' > Amount: {transaction.amount}  </span></div>
                <div> <span className='vendor'> Vendor: {transaction.vendor}  </span></div>
                <div><span> Category: {transaction.category}  </span></div>
                <div><FontAwesomeIcon onClick={this.delete} icon={faTrashAlt} /></div>
            </div>
        )
    }
}

export default Transaction