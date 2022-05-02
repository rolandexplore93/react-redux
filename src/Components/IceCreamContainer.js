import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of Ice Cream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}


// Step 1: Define a function called mapStateToProps
const mapStateToProps = (state) => {
    // Selector is used for bigger or complex situation
    // Selector return some state information from the redux store
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

// Step 2: Define a function mapDispatchToProps, it accepts dispatch as an argument
const mapDispatchToProps = (dispatch) => {
    return {
        // This will be an arrow function which dispatches the action creator from redux
        // import the buyCake() action creator from redux/index.js
        buyIceCream: () => dispatch(buyIceCream())
    }
}

// Step 3: Connect the two functions above to the react component using connect function or connect HOC from react-redux library
// So, import connect at the top from react-redux


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)