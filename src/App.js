import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
import Transactions from './components/Transactions.js'
import Operations from './components/Operations.js'
import Breakdown from './components/Breakdown.js'
const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = {
      allTransactions: [
      ],

      budget: 0,
    }
  }

  calculateTotal = () => {
    let total = 0
    this.state.allTransactions.map(m => total += m.amount)
    this.setState({ budget: total })
  }

  componentDidMount = async () => {
    this.getTransactions()
  }

  getTransactions = async () => {
    const response = await axios.get("http://localhost:3200/transactions")
    this.setState({ allTransactions: response.data }, this.calculateTotal)
  }

  saveTransaction = async (tran) => {
    let transactions = [...this.state.allTransactions]
    const savedTran = await axios.post('http://localhost:3200/transaction', tran)

    transactions.push(savedTran.data)
    this.setState({ allTransactions: transactions }, this.calculateTotal)
  }

  deleteTransaction = async (tranId) => {
    const deletedTran = await axios.delete(`http://localhost:3200/transaction/${tranId}`)
    this.getTransactions()
  }

  addOperation = (operation) => this.saveTransaction(operation)
  delete = id => this.deleteTransaction(id)

  render() {

    return (
      <Router>
        <div className="App">
          <div id="balance" style={this.state.budget > 500 ? { color: "green" } : { color: "red" }}>
            <p>   Your current balance : {this.state.budget} </p>
          </div>
          <div id='linksBar'>
            <div id='links'>
            <Link to='transactions'> <span>Transactions</span></Link>
            <Link to='operations'> <span>Add Operation</span></Link>
            <Link to='Breakdown'> <span>Breakdown</span></Link>

            </div>
          </div>
        </div>
        <Route path='/transactions' exact render={() => <Transactions key={'transactions'} delete={this.delete} transactions={this.state.allTransactions} />} />
        <Route path='/operations' exact render={() => <Operations key={'operation'} addOperation={this.addOperation} />} />
        <Route path='/Breakdown' exact render={() => <Breakdown key={'Breakdown'} transactions={this.state.allTransactions} />} />
      </Router>
    );
  }

}

export default App;