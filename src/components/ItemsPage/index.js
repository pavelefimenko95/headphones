import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemPreview from '../UI/ItemPreview';
import { loadProducts } from '../../actions/products';
import * as pagesConstants from '../../constants/pages';
import * as productConstants from '../../constants/product';

class ItemsPage extends Component {
    constructor(props) {
        super(props);

        this.renderPageContext = this.renderPageContext.bind(this);
    }

    render() {
        let { pageTitle, productType } = this.renderPageContext();

        return (
            <div className="items-page">
                <div className="page-headline">
                    <div className="page-headline__title">
                        <h1>{ pageTitle }</h1>
                    </div>
                </div>
                <div className="items-page__items-wrapper">
                    {
                        this.props.products.productsList
                            .filter(product => product.type === productType)
                            .map((product, i) => <ItemPreview key={i} product={ product } />)
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.actions.loadProducts();
    }

    renderPageContext() {
        switch(this.props.location.pathname) {
            case pagesConstants.MOUSE_PAGE_ROUTE:
                return {
                    pageTitle: 'мыши',
                    productType: productConstants.MOUSE
                };
            case pagesConstants.KEYBOARD_PAGE_ROUTE:
                return {
                    pageTitle: 'клавиатуры',
                    productType: productConstants.KEYBOARD
                };
            case pagesConstants.HEADPHONES_PAGE_ROUTE:
                return {
                    pageTitle: 'наушники',
                    productType: productConstants.HEADPHONES
                };
        }
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

ItemsPage.propTypes = {
    products: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);