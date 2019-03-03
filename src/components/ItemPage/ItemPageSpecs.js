import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa';
import { CSVLink } from "react-csv";

class ItemPageSpecs extends Component {
    render() {
        let { specs, setRef } = this.props;

        let csvData = specs ? specs.map(item => [item]) : [];
        return (
            <div className="item-page-specs" ref={ el => setRef(el, 'specsRef') }>
                <div className="item-page-specs__wrapper">
                    <div className="item-page-specs__wrapper__content">
                        <div className="item-page-specs__wrapper__content__title">технические спецификации</div>
                        <div className="item-page-specs__wrapper__content__items-wrapper">
                            {
                                specs && specs.map((item, i) => (
                                    <div key={i} className="item-page-specs__wrapper__content__items-wrapper__item">
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="item-page-specs__wrapper__download">
                        <div className="item-page-specs__wrapper__download__title">скачать по</div>
                        <CSVLink data={ csvData } filename="Technospot_product_specifications.csv" className="item-page-specs__wrapper__download__btn">
                            <div className="item-page-specs__wrapper__download__btn__icon">
                                <FaDownload size={ 30 } />
                            </div>
                            <div className="item-page-specs__wrapper__download__btn__text">
                                скачать
                            </div>
                        </CSVLink>
                    </div>
                </div>
            </div>
        );
    }
}

ItemPageSpecs.propTypes = {
    specs: PropTypes.array
};

export default ItemPageSpecs;