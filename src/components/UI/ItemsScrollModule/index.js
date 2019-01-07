import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import ItemPreviewScroll from './ItemPreviewScroll';
import ScrollbarThumb from '../scrollbar/ScrollbarThumb';

class ItemsScrollModule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false
        };

        this.scrollToActivePreview = this.scrollToActivePreview.bind(this);
    }

    render() {
        let { itemsList, selectedItem, match } = this.props;

        return (
            <Scrollbars renderThumbVertical={ ScrollbarThumb } className="items-scroll-module" ref={ el => this.scrollContainer = el }>
                { itemsList
                    .filter(item => item.type === match.params.itemType.toUpperCase())
                    .map((item, i) =>
                    <div key={ i } ref={ el => this['preview_' + item.id] = el}>
                        <ItemPreviewScroll
                            item={ item }
                            isSelected={ +item.id === +selectedItem.id }
                        />
                    </div>
                )}
            </Scrollbars>
        );
    }

    componentDidUpdate() {
        let { selectedItem } = this.props;
        if(selectedItem && selectedItem.id && !this.state.isScrolled) {
            this.setState({
                isScrolled: true
            });
            this.scrollToActivePreview();

        }
    }

    scrollToActivePreview() {
        this.scrollContainer.scrollTop(this['preview_' + this.props.selectedItem.id].offsetTop - 5);
    }
}

ItemsScrollModule.propTypes = {
    itemsList: PropTypes.array
};

export default ItemsScrollModule;

