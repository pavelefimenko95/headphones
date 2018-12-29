import React, { Component } from 'react';

class ItemsPage extends Component {
    render() {
        return (
            <div className="items-page">
                <div className="page-headline">
                    <div className="page-headline__title">
                        <h1>Мыши</h1>
                    </div>
                </div>
                <div className="items-page__items-wrapper">
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                    <div className="items-page__items-wrapper__item"></div>
                </div>
            </div>
        );
    }
}

export default ItemsPage;