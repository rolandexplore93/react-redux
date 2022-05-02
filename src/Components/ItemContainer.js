import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

// Practice mapStateToProps where we pass in two arguments
// Aim: to display the no of cake or icecream
function ItemContainer(props) {
  return (
    <div>
        <h2>Items = {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    // state para is the redux state
    // ownProps para is the props of the component itself

    // First, pass in the 'cake' props from the parent component
    // Conditionals: if .cake was passed in, access state.cake.numOfCakes, else, access state.cake.numOfIceCream
    const itemState = ownProps.cake ? `${state.cake.numOfCakes} cakes` : `${state.iceCream.numOfIceCream} ice creams`

    return {
        // Finally, return an {} where the key is item and value is itemState
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    // To dispatch either icecream or cake based on the props that is passed to the parent component
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
// connector: In case you want to dispatch only actions and not susbcribe to the state,
//  pass in null instead of mapStateToProps
// export default connect(null, mapDispatchToProps)(ItemContainer)
