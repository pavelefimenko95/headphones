import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ItemPreviewScroll extends Component {
    render() {
        let { item: {id, type, image, name}, isSelected} = this.props;

        return (
            <Link to={`/products/${ type.toLowerCase() }/${ id }`} className={ classNames('item-preview-scroll', {'item-preview-scroll--selected': isSelected}) }>
                <div className="item-preview-scroll__image">
                    <img src={ __INTERNAL_API_URL__ + image } alt="alt"/>
                </div>
                <div className="item-preview-scroll__text">
                    <div className="item-preview-scroll__text__name">
                        <h3>{ name }</h3>
                    </div>
                </div>
            </Link>
        );
    }
}

ItemPreviewScroll.propTypes = {
    item: PropTypes.object
};

export default ItemPreviewScroll;


