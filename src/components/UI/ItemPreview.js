import React, { Component } from 'react';

export default class ItemPreview extends Component {
    render() {
        let { image, name, description } = this.props.product;
        return (
            <div className="item-preview">
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
            </div>
        );
    }
}