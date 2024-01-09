import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCreaters } from '../state';
import { bindActionCreators } from 'redux';

export const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreaters, dispatch)
  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
      <button className="btn btn-danger me-2" onClick={() => withdrawMoney(100)}>-</button>
      <span>Update Balance</span>
      <button className="btn btn-success mx-2" onClick={() => depositMoney(100)}>+</button>
    </div>
  )
}
