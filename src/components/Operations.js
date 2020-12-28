import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amountInput: '',
            vendorInput: '',
            categoryInput: '',
        }
    }

    handleCategory = (e) => this.setState({ categoryInput: e.target.value })
    handleVendor = (e) => this.setState({ vendorInput: e.target.value })
    handleAmount = (e) => this.setState({ amountInput: e.target.value })

    addExpense = () => {
        let expense = {
            amount: this.state.amountInput * -1,
            vendor: this.state.vendorInput,
            category: this.state.categoryInput
        }
        this.setState({
            amountInput: '',
            vendorInput: '',
            categoryInput: '',
        })
        return this.props.addOperation(expense)
    }

    addIncome = () => {
        let income = {
            amount: this.state.amountInput,
            vendor: this.state.vendorInput,
            category: this.state.categoryInput
        }
        this.setState({
            amountInput: '',
            vendorInput: '',
            categoryInput: '',
        })
        return this.props.addOperation(income)
    }

    render() {
        return (
            <div id='operation'>
                <div className='input'><input type="number" placeholder='Amount' value={this.state.amountInput} onChange={this.handleAmount} /></div>
                <div className='input'><input type="text" placeholder='Vendor' value={this.state.vendorInput} onChange={this.handleVendor} /></div>
                <div className='input'><input type="text" placeholder='category' value={this.state.categoryInput} onChange={this.handleCategory} /></div>
                <Link to='transactions'>
                    <button id='withdraw' onClick={this.addExpense}>Withdraw</button>
                    <button id='deposit' onClick={this.addIncome}>Deposit</button>
                </Link>
            </div>
        )
    }
}

export default Operations 