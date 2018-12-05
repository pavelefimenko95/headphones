import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__logo-container">
                    <div className="navbar__logo-container__img">
                        <img src="../../../assets/images/foottrace.png" alt="Logo"/>
                    </div>
                </div>
                <div className="navbar__menu">
                    <div className="navbar__menu__item">
                        <div className="navbar__menu__item__icon">
                            Icon
                        </div>
                        <div className="navbar__menu__item__title">
                            Мыши
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;