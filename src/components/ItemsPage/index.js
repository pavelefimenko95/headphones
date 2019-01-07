import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemPreview from '../UI/ItemPreview';
import { loadProducts } from '../../actions/products';
import renderPageContext from '../../utils/renderPageContext';

class ItemsPage extends Component {
    render() {
        let { location, match } = this.props;
        let { pageTitle } = renderPageContext(match.params.itemType.toUpperCase());

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
                            .filter(product => product.type === match.params.itemType.toUpperCase())
                            .map((product, i) => <ItemPreview key={i} product={ product } location={ location }/>)
                    }
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

ItemsPage.propTypes = {
    products: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);