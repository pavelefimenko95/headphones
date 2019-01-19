import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ItemPageHeader extends Component {
    render() {
        let { name, isPageScrolled, headerWidth } = this.props;

        return (
            <div style={{ width: headerWidth + 'px' }} className={classNames('item-page-header', { 'item-page-header--scrolled': isPageScrolled })}>
                <div className="item-page-header__title">
                    { name }
                </div>
                <div className="item-page-header__menu">
                    <div className="item-page-header__menu__item">начало</div>
                    <div className="item-page-header__menu__item">галерея</div>
                    <div className="item-page-header__menu__item">характеристики</div>
                    <div className="item-page-header__menu__item">спецификации</div>
                </div>
            </div>
        );
    }
}

ItemPageHeader.propTypes = {
    name: PropTypes.string,
    isPageScrolled: PropTypes.bool,
    headerWidth: PropTypes.number
};

export default ItemPageHeader;
