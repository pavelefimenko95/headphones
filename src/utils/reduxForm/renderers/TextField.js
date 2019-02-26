import React from 'react';
import classNames from 'classnames';

export default ({ input, meta: {touched, error}, id }) =>
    <div className="input-error-wrapper">
        <div className={ classNames({'input-error-wrapper__input': touched && error}) }>
            <input {...input} type="text" className="input--text" id={ id } />
        </div>
        <div className="input-error-wrapper__error">
            <span>{ touched && error }</span>
        </div>
    </div>;