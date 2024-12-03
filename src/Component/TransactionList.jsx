import React from 'react'

function TransactionList({transactions}) {
  return (
    <>
        <ul className='list-none container mx-auto'>
            {
                transactions.map((transaction)=>(
                    <li key={Math.random()} className={` ${transaction.amount > 0 ? "bg-blue-300 p-2" : "bg-red-300 p-2"}`}>
                        {transaction.text}

                        <span className='float-right'>{transaction.amount}</span>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default TransactionList