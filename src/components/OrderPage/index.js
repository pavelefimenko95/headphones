import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import randomNumber from 'random-number';
import _ from 'lodash';
import OrderPageForm from '../forms/OrderPageForm';
import { loadCities } from '../../actions/cities';
import { loadPostOffices } from '../../actions/postOffices';
import { createOrder } from '../../actions/orders';
import { loadSoldProducts } from '../../actions/soldProducts';
import ProductsSidebar from '../UI/ProductsSidebar';

class OrderPage extends Component {
    constructor(props) {
        super(props);

        this.onOrderPageFormSubmit = this.onOrderPageFormSubmit.bind(this);
    }

    render() {
        let { props } = this;

        return (
            <div className="order-page">
                <div className="order-page__wrapper">
                    <div className="order-page__wrapper__form card">
                        <div className="order-page__wrapper__form__title">
                            <h1>оформление заказа</h1>
                        </div>
                        <OrderPageForm
                            onSubmit={ this.onOrderPageFormSubmit }
                            cities={ props.cities }
                            postOffices={ props.postOffices }
                            loadPostOffices={ props.actions.loadPostOffices }
                        />
                    </div>
                    <div className="order-page__wrapper__sidebar card">
                        <ProductsSidebar products={ props.soldProducts.soldProductsList }/>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.actions.loadCities();
        this.props.actions.loadSoldProducts({ cartInfoId: this.props.match.params.cartInfoId });
    }

    onOrderPageFormSubmit(formData) {
        let { cities, postOffices, match, history } = this.props;

        this.props.actions.createOrder({
            ...formData,
            city: _.get(cities.citiesList.find(city => city.Ref === formData.city), 'DescriptionRu', formData.city),
            postOffice: _.get(postOffices.postOfficesList.find(postOffice => postOffice.Ref === formData.postOffice), 'DescriptionRu', formData.postOffice),
            id: randomNumber({
                min: 100000000,
                max: 999999999,
                integer: true
            }),
            cartInfoId: match.params.cartInfoId
        }, history.push);
    }
}

const mapStateToProps = state => ({
    cities: state.cities,
    postOffices: state.postOffices,
    soldProducts: state.soldProducts
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadCities,
        loadPostOffices,
        createOrder,
        loadSoldProducts
    }, dispatch)
});

OrderPage.propTypes = {
    cities: PropTypes.object,
    postOffices: PropTypes.object,
    soldProducts: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);