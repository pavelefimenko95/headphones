import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validator from 'validator';
import TextField from '../../utils/reduxForm/renderers/TextField';
import SelectField from '../../utils/reduxForm/renderers/SelectField';

const validate = ({ name, city, postOffice, phone, email }) => {
    let errors = {};
    
    if(!name) {
        errors.name = 'Это поле обязательное';
    }

    if(!city) {
        errors.city = 'Это поле обязательное';
    }

    if(!postOffice) {
        errors.postOffice = 'Это поле обязательное';
    }

    if(!phone) {
        errors.phone = 'Это поле обязательное';
    }

    if(email && !validator.isEmail(email)) {
        errors.email = 'Неверная эл. почта';
    }

    return errors;
};

class OrderPageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cityInputValue: ''
        };

        this.onCityInputChange = this.onCityInputChange.bind(this);
    }

    render() {
        let { props, state } = this;

        let selectCityData = state.cityInputValue.length ? [
            {value: null, label: '-'},
            ...props.cities.citiesList
                .map(city => ({
                    value: city.Ref,
                    label: city.DescriptionRu
                }))
                .sort((prev, next) => prev.label.length > next.label.length ? 1 : -1)
        ] : [];

        let selectPostOfficeData = [
            {value: null, label: '-'},
            ...props.postOffices.postOfficesList.map(postOffice => ({
                value: postOffice.Ref,
                label: postOffice.DescriptionRu
            }))
        ];

        return (
            <form onSubmit={ this.props.handleSubmit }>
                <div className="form-control__field">
                    <label htmlFor="name" className="form-control__field__label">
                        Имя и фамилия*
                    </label>
                    <div className="form-control__field__input">
                        <Field name="name" component={ TextField } id="name" />
                    </div>
                </div>
                <div className="form-control__field">
                    <label htmlFor="city" className="form-control__field__label">
                        Город*
                    </label>
                    <div className="form-control__field__input">
                        <Field
                            name="city"
                            component={ SelectField }
                            id="city"
                            selectData={ selectCityData }
                            placeholder="Введите свой город"
                            customOnChange={ this.onCityInputChange }
                            startsWithFiltering={ true }
                        />
                    </div>
                </div>
                <div className="form-control__field">
                    <label htmlFor="postOffice" className="form-control__field__label">
                        Отделение Новой Почты*
                    </label>
                    <div className="form-control__field__input">
                        <Field
                            name="postOffice"
                            component={ SelectField }
                            id="postOffice"
                            selectData={ selectPostOfficeData }
                            val={ selectPostOfficeData.find(data => data.value === props.formData.postOffice) }
                            placeholder="Выберите отделение"
                            startsWithFiltering={ false }
                        />
                    </div>
                </div>
                <div className="form-control__field">
                    <label htmlFor="phone" className="form-control__field__label">
                        Мобильный телефон*
                    </label>
                    <div className="form-control__field__input">
                        <Field name="phone" component={ TextField } id="phone" />
                    </div>
                </div>
                <div className="form-control__field">
                    <label htmlFor="email" className="form-control__field__label">
                        Эл. почта
                    </label>
                    <div className="form-control__field__input">
                        <Field name="email" component={ TextField } id="email" />
                    </div>
                </div>
                <div className="form-control__submit">
                    <button className="form-control__submit__button button button--red button--large">
                        Далее
                    </button>
                </div>
            </form>
        );
    }

    componentDidUpdate(prevProps) {
        let { props } = this;
        if(props.formData.city !== prevProps.formData.city) {
            props.change('postOffice', null);
            props.touch('city');
            props.loadPostOffices(this.props.formData.city);
        }

        if(props.formData.postOffice !== prevProps.formData.postOffice && props.formData.postOffice) {
            props.touch('postOffice');
        }
    }

    onCityInputChange(value) {
        this.setState({
            cityInputValue: value
        });
    }
}

let selector = formValueSelector('OrderPageForm');

const mapStateToProps = state => ({
    formData: {
        city: selector(state, 'city'),
        postOffice: selector(state, 'postOffice')
    }
});

export default connect(mapStateToProps, null)(reduxForm({
    form: 'OrderPageForm',
    validate
})(OrderPageForm));