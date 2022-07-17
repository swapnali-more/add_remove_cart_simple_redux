import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart, removeToCart } from '../services/actions/actions'

const mapStateToProps = state => ({
    cartData: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
