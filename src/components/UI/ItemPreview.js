import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes  from 'prop-types';

class ItemPreview extends Component {
    render() {
        let { location, product: { id, image, name, description }} = this.props;
        return (
            <Link to={ `${ location && location.pathname }/${ id }` } className="item-preview">
                <div className="item-preview__image">
                    <img src={ __INTERNAL_API_URL__ + image } alt="alt"/>
                </div>
                <div className="item-preview__text">
                    <div className="item-preview__text__name">
                        <h2>{ name }</h2>
                    </div>
                    <div className="item-preview__text__description">
                        <p>{ description }</p>
                    </div>
                </div>
            </Link>
        );
    }
}

ItemPreview.propTypes = {
    product: PropTypes.object
};

export default ItemPreview;