import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ProductsSidebarItem from './ProductsSidebarItem';
import { Scrollbars } from 'react-custom-scrollbars';

class ProductsSidebar extends Component {
    render() {
        let { props } = this;

        return (
            <div className="products-sidebar">
                <div className="products-sidebar__items">
                    <Scrollbars className="products-sidebar__items__wrapper">
                        {
                            props.products.map((product, i) => <ProductsSidebarItem key={ i } product={ product } />)
                        }
                    </Scrollbars>
                </div>
                <div className="products-sidebar__summary">
                    <div className="products-sidebar__summary__title">
                        Всего:
                    </div>
                    <div className="products-sidebar__summary__total">
                        {
                            props.products.reduce((prev, next) =>
                                (prev.price ? prev.price * prev.quantity : prev) + (next.price ? next.price * next.quantity : next), 0
                            )
                        }
                        грн
                    </div>
                </div>
            </div>
        );
    }
}

ProductsSidebar.propTypes = {
    products: PropTypes.array
};

export default ProductsSidebar;
