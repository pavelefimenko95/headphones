import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProducts } from '../../actions/products';
import ItemsScrollModule from '../UI/ItemsScrollModule';
import ItemPageHeader from './ItemPageHeader';
import ItemPageLanding from './ItemPageLanding';

class ItemPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPageScrolled: false,
            headerWidth: null
        };
    }

    render() {
        let { products: { productsList }, match, location } = this.props;
        let selectedProduct = productsList.find(product => +product.id === +match.params.id);

        let name, description, landingImage;
        if(selectedProduct) {
            description = selectedProduct.description;
            landingImage = selectedProduct.landingImage;
            name = selectedProduct.name;
        }

        return (
            <div className="item-page">
                <div className="item-page__scroll-module">
                    <ItemsScrollModule
                        itemsList={ productsList }
                        selectedItem={ selectedProduct }
                        location={ location }
                        match={ match }
                    />
                </div>
                <div className="item-page__main" ref={ el => this.mainContainer = el }>
                    <ItemPageHeader name={ name } isPageScrolled={ this.state.isPageScrolled } headerWidth={ this.state.headerWidth } />
                    <div className="item-page__main__content">
                        <ItemPageLanding description={ description } landingImage={ landingImage } />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.actions.loadProducts();
        window.scrollTo(0, 0);
        window.onscroll = () => {
            console.log(window.pageYOffset, this.state.isPageScrolled);
            if(window.pageYOffset <= 20 && this.state.isPageScrolled) {
                this.setState({
                    isPageScrolled: false
                });
            } else if(window.pageYOffset > 20 && !this.state.isPageScrolled) {
                this.setState({
                    isPageScrolled: true
                });
            }
        };

        this.setState({
            headerWidth: this.mainContainer.getBoundingClientRect().width
        });
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
