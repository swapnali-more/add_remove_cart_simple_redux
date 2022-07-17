import Header from '../components/Header'
import { connect } from 'react-redux'
import { addToCart } from '../services/actions/actions'

const mapStateToProps = state => ({
    cartData: state.cartReducer
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
