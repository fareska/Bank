import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
import Transactions from './components/Transactions.jsx'
import Operations from './components/Operations.jsx'
import Breakdown from './components/Breakdown.jsx'
import TemApp from './components/TemApp';
import Header from './components/Header';
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
    this.state.allTransactions.forEach(m => total += m.amount)
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

  // <TemApp budget={this.state.budget} />
  // <Route path='/transactions' exact render={() => <Transactions delete={this.delete} transactions={this.state.allTransactions} />} />
  // <Route path='/operations' exact render={() => <Operations addOperation={this.addOperation} />} />
  // <Route path='/Breakdown' exact render={() => <Breakdown transactions={this.state.allTransactions} />} />
  render() {

    return (
      <Router>
        <div className="App">
          <Header delete={this.delete} transactions={this.state.allTransactions}
            addOperation={this.addOperation}
            transactions={this.state.allTransactions}
            budget={this.state.budget} />
        </div>
      </Router>
    );
  }

}

export default App;