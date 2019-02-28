import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemPageLanding extends Component {
    render() {
        let { description, landingImage, setRef } = this.props;

        return (
            <div className="item-page-landing" ref={ el => setRef(el, 'landingRef') }>
                <div className="item-page-landing__description">
                    <h1>{ description }</h1>
                </div>
                <div className="item-page-landing__image" style={{backgroundImage: `url(${__INTERNAL_API_URL__ + landingImage})`}}>
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