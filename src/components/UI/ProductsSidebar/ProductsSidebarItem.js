import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsSidebarItem extends Component {
    render() {
        let { props } = this;

        return (
            <div className="products-sidebar-item">
                <div className="products-sidebar-item__image">
                    <img src={ __INTERNAL_API_URL__ + props.product.image } alt="" />
                </div>
                <div className="products-sidebar-item__content">
                    <div className="products-sidebar-item__content__name">
                        { props.product.name }
                    </div>
                    <div className="products-sidebar-item__content__bottom">
                        <div className="products-sidebar-item__content__bottom__quantity">
                            { props.product.quantity } шт.
                        </div>
                        <div className="products-sidebar-item__content__bottom__price">
                            { props.product.price } грн
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductsSidebarItem.propTypes = {
    product: PropTypes.object
};

export default ProductsSidebarItem;