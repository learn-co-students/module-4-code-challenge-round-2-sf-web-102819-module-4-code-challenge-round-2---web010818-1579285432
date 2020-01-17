import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.eachTransaction.posted_at}</td>
      <td>{props.eachTransaction.description}</td>
      <td>{props.eachTransaction.category}</td>
      <td>{props.eachTransaction.amount}</td>
    </tr>
  )
}

export default Transaction
