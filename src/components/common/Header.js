import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";
import ReactSVG from 'react-svg';
import * as productConstants from '../../constants/product';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo-container">
                    <div className="header__logo-container__img">
                        <ReactSVG src="../../../assets/images/logo.svg" />
                    </div>
                </div>
                <div className="header__menu">
                    <NavLink to={`/products/${ productConstants.MOUSE.toLowerCase() }`} className="header__menu__item">
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/mouse-icon.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>мыши</span>
                        </div>
                    </NavLink>
                    <NavLink to={`/products/${ productConstants.KEYBOARD.toLowerCase() }`} className="header__menu__item">
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/keyboard.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>клавиатуры</span>
                        </div>
                    </NavLink>
                    <NavLink to={`/products/${ productConstants.HEADPHONES.toLowerCase() }`}  className="header__menu__item">
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/headphones-icon.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>наушники</span>
                        </div>
                    </NavLink>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon">
                            <ReactSVG svgClassName="header__menu__item__icon__svg" src="../../../assets/images/plus-icon.svg" />
                        </div>
                        <div className="header__menu__item__title">
                            <span>аксуссуары</span>
                        </div>
                    </div>
                    <div className="header__menu__separator">
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>о bloody</span>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>запрос</span>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>пресс-центр</span>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>галерея</span>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>скачать</span>
                        </div>
                    </div>
                    <div className="header__menu__item">
                        <div className="header__menu__item__icon header__menu__item__icon--circle">
                            <FaCircle size={ 6 } />
                        </div>
                        <div className="header__menu__item__title">
                            <span>магазин</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;