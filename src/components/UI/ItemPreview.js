import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes  from 'prop-types';
import Transition from 'react-transition-group/Transition';

class ItemPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            in: false
        }
    }

    render() {
        let { location, product: { id, image, name, description }} = this.props;
        return (
            <Transition in={ this.state.in } timeout={0}>
                {state => {
                    return <Link to={ `${ location && location.pathname }/${ id }` } className={`item-preview item-preview--${ state }`}>
                        <div className="item-preview__image">
                            <img src={ __INTERNAL_API_URL__ + image } alt="alt"/>
                        </div>
                        <div className="item-preview__text">
                            <div className="item-preview__text__name">
                                <h2>{ name }</h2>
                            </div>
                            <div className="item-preview__text__description">
                                <p>{ description }</p>
                            </div>
                        </div>
                    </Link>
                }}
            </Transition>
        );
    }

    componentDidMount() {
        this.setState({
            in: true
        });
    }

    componentWillUnmount() {
        this.setState({
            in: false
        });
    }
}

ItemPreview.propTypes = {
    product: PropTypes.object
};

export default ItemPreview;