import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyApple } from '../redux/apple/appleActions'

function AppleContainer() {
    const numOfApple = useSelector(state => state.apple.numOfApple)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Hooks | No. of Apple - {numOfApple}</h2>
        <button onClick={() => dispatch(buyApple())}>Buy Apple</button>
    </div>
  )
}

export default AppleContainer