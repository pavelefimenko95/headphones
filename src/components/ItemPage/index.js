import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProducts } from '../../actions/products';
import { loadGalleries } from '../../actions/galleries';
import ItemsScrollModule from '../UI/ItemsScrollModule';
import Gallery from '../UI/Gallery';
import ItemPageHeader from './ItemPageHeader';
import ItemPageLanding from './ItemPageLanding';
import ItemPageSpecs from './ItemPageSpecs';
import Footer from '../common/Footer';

class ItemPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPageScrolled: false,
            headerWidth: null,
            refs: {}
        };

        this.setRef = this.setRef.bind(this);
    }

    render() {
        let { products: { productsList }, galleries: { galleriesList },  match, location } = this.props;
        let selectedProduct = productsList.find(product => +product.id === +match.params.id);

        let { id, name, description, landingImage, specs } = selectedProduct || {};

        let selectedGalleriesList = galleriesList.filter(gallery => gallery.productId === id);

        return (
            <Fragment>
                <ItemPageHeader refs={ this.state.refs } name={ name } isPageScrolled={ this.state.isPageScrolled } headerWidth={ this.state.headerWidth } />
                <div className="item-page-scroll-module-wrapper">
                    <ItemsScrollModule
                        itemsList={ productsList }
                        selectedItem={ selectedProduct }
                        location={ location }
                        match={ match }
                    />
                </div>
                <div className="item-page">
                    <div className="item-page__main" ref={ el => this.mainContainer = el }>
                        <div className="item-page__main__content">
                            <ItemPageLanding setRef={ this.setRef } description={ description } landingImage={ landingImage } />
                            <Gallery setRef={ this.setRef } galleriesList={ selectedGalleriesList } />
                            <ItemPageSpecs setRef={ this.setRef } specs={ specs } />
                            <Footer />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    componentDidMount() {
        this.props.actions.loadProducts();
        this.props.actions.loadGalleries();

        window.scrollTo(0, 0);
        window.onscroll = () => {
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

    setRef(el, refName) {
        if(!this.state.refs[refName]) {
            this.setState(prevState => ({
                refs: {
                    ...prevState.refs,
                    [refName]: el
                }
            }));
        }
    }
}

const mapStateToProps = state => ({
    products: state.products,
    galleries: state.galleries
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadProducts,
        loadGalleries
    }, dispatch)
});

ItemPage.propTypes = {
    products: PropTypes.object,
    galleries: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
