import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class OrderPage extends Component {
    render() {
        return (
            <div className="order-page">
                order page
            </div>
        );
    }
}

export default connect(null, null)(OrderPage);