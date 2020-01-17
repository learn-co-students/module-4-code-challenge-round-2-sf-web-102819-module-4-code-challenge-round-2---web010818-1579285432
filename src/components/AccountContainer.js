import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      allTransactions: [],
      filteredTransactions: []
    };
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(result => {
        this.setState({
          allTransactions: result,
          filteredTransactions: result
        });
      });
  }

  handleChange = event => {

    let filterDescription = this.state.filteredTransactions.filter(transaction =>
      transaction.description.toLowerCase().startsWith(event.target.value.toLowerCase())
    );

    let filterCategory = this.state.filteredTransactions.filter(transaction =>
      transaction.category.toLowerCase().startsWith(event.target.value.toLowerCase())
    ); // searches Category keys in api.. looking to combined this with filterDescription

 

    if (event.target.value !== "") {
      this.setState({
        filteredTransactions: filterDescription
      });



    } else {
      this.setState({
        filteredTransactions: this.state.allTransactions
      });
    }

    // if (this.state.filteredTransactions === []) {       // not enough to implement category search
    //   this.setState({
    //     filteredTransactions:  filterCategory
    //   })
    // }

  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          filteredTransactions={this.state.filteredTransactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
