import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyApple } from '../redux/apple/appleActions'

function AppleContainer() {
    const numOfApple = useSelector(state => state.apple.numOfApple)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(0)

  return (
    <div>
        <h2>Hooks | No. of Apple - {numOfApple}</h2>
        <input type='number' value={number} onChange={e => {setNumber(e.target.value); console.log(e.target.value)}} />
        <button onClick={() => dispatch(buyApple(number))}>Buy {number} Apple</button>
    </div>
  )
}

export default AppleContainer