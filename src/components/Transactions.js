import { Component } from "react";
import Transaction from "./Transaction";

class Transactions extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    delete = id => this.props.delete(id)

    render() {
        let transactions = this.props.transactions
        return (
            <div id="transactions">
                {transactions.map((t, i) => <Transaction key={i} delete={this.delete} transaction={t} /> )}
            </div>
        )
    }
}

export default Transactions
