import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


// Step 1: Define a function called mapStateToProps
const mapStateToProps = (state) => {
    // Selector is used for bigger or complex situation
    // Selector return some state information from the redux store
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// Step 2: Define a function mapDispatchToProps, it accepts dispatch as an argument
const mapDispatchToProps = (dispatch) => {
    return {
        // This will be an arrow function which dispatches the action creator from redux
        // import the buyCake() action creator from redux/index.js
        buyCake: () => dispatch(buyCake())
    }
}

// Step 3: Connect the two functions above to the react component using connect function or connect HOC from react-redux library
// So, import connect at the top from react-redux


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)