import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";
import ReactSVG from 'react-svg';
import classNames from 'classnames';
import onOutsideElementClick from '../../utils/onOutsideElementClick';
import * as productConstants from '../../constants/product';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };

        this.openHeader = this.openHeader.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    render() {
        let { state } = this;

        return (
            <div
                className={ classNames('header', {'header--opened': state.isOpened }) }
                onClick={ this.openHeader }
                ref={el => this.headerRef = el}
            >
                <div className="header__logo-container">
                    <div className="header__logo-container__img">
                        <ReactSVG src="../../../assets/images/logo.svg" />
                    </div>
                </div>
                <div className="header__menu">
                    <NavLink
                        to={`/products/${ productConstants.MOUSE.toLowerCase() }`}
                        className="header__menu__item"
                        onClick={ this.onLinkClick }
                    >
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/mouse-icon.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>мыши</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/products/${ productConstants.KEYBOARD.toLowerCase() }`}
                        className="header__menu__item"
                        onClick={ this.onLinkClick }
                    >
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/keyboard.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>клавиатуры</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to={`/products/${ productConstants.HEADPHONES.toLowerCase() }`}
                        className="header__menu__item"
                        onClick={ this.onLinkClick }
                    >
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/headphones-icon.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>наушники</span>
                        </div>
                    </NavLink>
                    {/*<div className="header__menu__item">*/}
                        {/*<div className="header__menu__item__icon">*/}
                            {/*<ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/plus-icon.svg" />*/}
                        {/*</div>*/}
                        {/*<div className="header__menu__item__title">*/}
                            {/*<span>аксуссуары</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="header__menu__separator">
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>о нас</span>
                        </div>
                    </div>
                    {/*<div className="header__menu__item">*/}
                        {/*<div className="header__menu__item__icon header__menu__item__icon--circle">*/}
                            {/*<FaCircle size={ 6 } />*/}
                        {/*</div>*/}
                        {/*<div className="header__menu__item__title">*/}
                            {/*<span>запрос</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="header__menu__item">*/}
                        {/*<div className="header__menu__item__icon header__menu__item__icon--circle">*/}
                            {/*<FaCircle size={ 6 } />*/}
                        {/*</div>*/}
                        {/*<div className="header__menu__item__title">*/}
                            {/*<span>пресс-центр</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="header__menu__item">*/}
                        {/*<div className="header__menu__item__icon header__menu__item__icon--circle">*/}
                            {/*<FaCircle size={ 6 } />*/}
                        {/*</div>*/}
                        {/*<div className="header__menu__item__title">*/}
                            {/*<span>галерея</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="header__menu__item">*/}
                        {/*<div className="header__menu__item__icon header__menu__item__icon--circle">*/}
                            {/*<FaCircle size={ 6 } />*/}
                        {/*</div>*/}
                        {/*<div className="header__menu__item__title">*/}
                            {/*<span>скачать</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="header__menu__item">*/}
                        {/*<div className="header__menu__item__icon header__menu__item__icon--circle">*/}
                            {/*<FaCircle size={ 6 } />*/}
                        {/*</div>*/}
                        {/*<div className="header__menu__item__title">*/}
                            {/*<span>магазин</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

    componentDidMount() {
        onOutsideElementClick(this.headerRef, () => {
            this.setState({
                isOpened: false
            });
        });
    }

    openHeader() {
        if(!this.state.isOpened) {
            this.setState({
                isOpened: true
            });
        }
    }

    onLinkClick(e) {
        if(!this.state.isOpened && window.screen.width < 550) {
            e.preventDefault();
        } else {
            this.setState({
                isOpened: false
            });
        }
    }
}

export default Header;