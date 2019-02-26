import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaShoppingCart } from 'react-icons/fa';
import { openCartModal } from '../../../actions/cart';

class CartControls extends Component {
    render() {
        let { cart, actions } = this.props;

        let isShow = window.location.pathname.indexOf('order') === -1;
        return (
            <div className={classNames('cart-controls', {'hidden': !isShow})} onClick={ actions.openCartModal }>
                <div className="cart-controls__icons-wrapper">
                    <div className="cart-controls__icons-wrapper__cart">
                        <FaShoppingCart size={ 35 } />
                    </div>
                    <div className="cart-controls__icons-wrapper__quantity">
                        { cart.cartProductsList.length }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        openCartModal
    }, dispatch)
});

CartControls.propTypes = {
    cart: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CartControls);