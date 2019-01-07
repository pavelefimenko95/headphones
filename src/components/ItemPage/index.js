import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/products';
import ItemsScrollModule from '../UI/ItemsScrollModule';
import PropTypes from 'prop-types';

class ItemPage extends Component {
    render() {
        let { products: { productsList }, match, location } = this.props;
        let selectedProduct = productsList.find(product => +product.id === +match.params.id);

        return (
            <div className="item-page">
                <div className="item-page__scroll-module">
                    <ItemsScrollModule
                        itemsList={ productsList }
                        selectedItem={ selectedProduct }
                        location={ location }
                        match={ match } />
                </div>
                <div className="item-page__main">
                    <div className="item-page__main__header">

                    </div>
                    <div className="item-page__main__content">

                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.actions.loadProducts();
    }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadProducts
    }, dispatch)
});

ItemPage.propTypes = {
    products: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
