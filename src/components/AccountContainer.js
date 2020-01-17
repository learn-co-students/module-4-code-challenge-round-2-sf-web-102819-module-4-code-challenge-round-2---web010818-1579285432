import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {
constructor(props) {
  super(props)

  this.state = {
    transactions: [],
    searchedTransaction: []
  }
}


  fetchTransactions = async() => {
    const response = await fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    const apiData = await response.json()
    console.log(apiData)
    this.setState({
      transactions: apiData,
      searchedTransaction: apiData
    })
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  searchedTransaction = (event) => {
    // console.log(event.target.value)
    let searchResult = this.state.transactions.filter(transaction =>transaction.description.includes(event.target.value));
    console.log(searchResult)
    this.setState({
      searchedTransaction: searchResult
    }, () => console.log(this.state.searchedTransaction));
  };

  // handleChange(event) {
  //   // your code here
  // }

  render() {

    return (
      <div>
        <Search searchedTransaction={this.searchedTransaction}/>
        <TransactionsList allTransactions={this.state.searchedTransaction}/>
      </div>
    )
  }
}

export default AccountContainer
