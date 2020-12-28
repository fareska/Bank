import React, { Component } from 'react'

class Breakdown extends Component {

    breakDown = (transactions) => {
        let list = {}
        for (let t of transactions) {
            if (!list[t.category]) {
                console.log(list[t.category])
                list[t.category] = t.amount
            }
            else list[t.category] += t.amount
        }
        let listToRender = []
        for (let [key, val] of Object.entries(list)) {
            listToRender.push(`${key} : ${val}`)     
        }
        return listToRender
    }

    render() {
        let transactions = this.props.transactions

        return (
            <div id='list'>
                {this.breakDown(transactions).map(t =>  <div class='listCategory'> {t} </div>)}
            </div>
        )
    }
}

export default Breakdown