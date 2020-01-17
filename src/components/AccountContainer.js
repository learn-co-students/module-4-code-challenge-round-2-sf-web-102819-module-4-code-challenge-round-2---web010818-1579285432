import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      allTransactions: [],
      displayTransactions: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allTransactions: data,
          displayTransactions: data
        })
      })
  }

  handleChange = event => {
    // your code here
    console.log(event.target.value)
    if (event.target.value !== '') {
      const newDisplayTransaction = this.state.allTransactions.filter(
        transaction =>
          transaction.description
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase()) ||
          transaction.category
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase())
      )

      console.log(newDisplayTransaction)
      this.setState({
        displayTransactions: newDisplayTransaction,
        searchTerm: event.target.value
      })
    } else {
      this.setState({
        displayTransactions: this.state.allTransactions,
        searchTerm: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          renderAllTransactions={this.state.displayTransactions}
        />
      </div>
    )
  }
}

export default AccountContainer
