import React, { Component } from 'react';

export default class OrderSuccessPage extends Component {
    render() {
        return (
            <div className="order-success-page">
                <div className="order-success-page__wrapper card">
                    <h1>Спасибо за покупку!</h1>
                    <p>Номер вашего заказа: { this.props.match.params.orderId }</p>
                    <p>Наш менеджер свяжется с Вами для уточнения деталей оплаты и доставки заказа</p>
                </div>
            </div>
        );
    }
}