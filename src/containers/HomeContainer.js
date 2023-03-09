import { connect } from 'react-redux';
import Home from '../components/Home';
import { addToCart, removeToCart } from '../services/actions/actions';

// Map Redux state to component props
const mapStateToProps = state => ({
    cartData: state.cartReducer
});

// Map Redux dispatch actions to component props
const mapDispatchToProps = {
    addToCartHandler: addToCart,
    removeToCartHandler: removeToCart
};

// Connect the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
