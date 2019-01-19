import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemPageLanding extends Component {
    render() {
        let { description, landingImage } = this.props;

        return (
            <div className="item-page-landing">
                <div className="item-page-landing__description">
                    <h1>{ description }</h1>
                </div>
                <div className="item-page-landing__image">
                    <img src={ __INTERNAL_API_URL__ + landingImage } alt="alt"/>
                </div>
            </div>
        );
    }
}

ItemPageLanding.propTypes = {
    description: PropTypes.string,
    landingImage: PropTypes.string
};

export default ItemPageLanding;