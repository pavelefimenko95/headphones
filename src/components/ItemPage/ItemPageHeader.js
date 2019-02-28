import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ItemPageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLink: ''
        };

        this.scrollToElement = this.scrollToElement.bind(this);
    }

    render() {
        let { state } = this;
        let { name, isPageScrolled, pageYOffset, headerWidth, refs } = this.props;

        return (
            <div style={{ width: headerWidth + 'px', top: pageYOffset + 'px' }} className={classNames('item-page-header', { 'item-page-header--scrolled': isPageScrolled })}>
                <div className="item-page-header__title">
                    { name }
                </div>
                <div className="item-page-header__menu">
                    <div
                        className={classNames('item-page-header__menu__item', {'item-page-header__menu__item--active': state.activeLink === 'landingRef'})}
                        onClick={ () => this.scrollToElement('landingRef') }
                    >начало</div>
                    <div
                        className={classNames('item-page-header__menu__item', {'item-page-header__menu__item--active': state.activeLink === 'galleryRef'})}
                        onClick={ () => this.scrollToElement('galleryRef') }
                    >галерея</div>
                    {/*<div className="item-page-header__menu__item">характеристики</div>*/}
                    <div
                        className={classNames('item-page-header__menu__item', {'item-page-header__menu__item--active': state.activeLink === 'specsRef'})}
                        onClick={ () => this.scrollToElement('specsRef') }
                    >спецификации</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let { refs } = this.props;

            for(let key in refs) {
                let { top, bottom } = refs[key].getBoundingClientRect();
                if(top < 72 && bottom > 72) {
                    this.setState({
                        activeLink: key
                    });
                }
            }
        });
    }

    scrollToElement(refName) {
        window.scrollTo({top: this.props.refs[refName].getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
    }
}

ItemPageHeader.propTypes = {
    name: PropTypes.string,
    isPageScrolled: PropTypes.bool,
    headerWidth: PropTypes.number
};

export default ItemPageHeader;
