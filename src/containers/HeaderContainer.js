import Header from '../components/Header';
import { connect } from 'react-redux';

// Map Redux state to component props
const mapStateToProps = state => ({
    cartData: state.cartReducer
});

// Map Redux dispatch actions to component props
const mapDispatchToProps = {};

// Connect the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);
