import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import classNames from 'classnames';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImageId: 0,
            selectedGalleryId: ''
        };

        this.onSelectGalleryChange = this.onSelectGalleryChange.bind(this);
        this.onSelectImageChange = this.onSelectImageChange.bind(this);
    }

    render() {
        let { galleriesList, setRef } = this.props;
        let { selectedImageId } = this.state;

        let selectedGallery = galleriesList.find(gallery => +gallery.id === +this.state.selectedGalleryId);

        return (
            <div className="gallery" ref={ el => setRef(el, 'galleryRef')}>
                <div className="gallery__wrapper">
                    <div className='gallery__wrapper__image'>
                        <img src={__INTERNAL_API_URL__ + _.get(selectedGallery, `collection[${selectedImageId}]`)} />
                    </div>
                    <div className="gallery__wrapper__controls">
                        <div className="gallery__wrapper__controls__color">
                            <div className="gallery__wrapper__controls__color__title">
                                <h1>цвет</h1>
                            </div>
                            <div className="gallery__wrapper__controls__color__buttons">
                                {
                                    galleriesList.map((gallery, i) =>
                                        <div className="gallery__wrapper__controls__color__buttons__button" key={ i }>
                                            <input
                                                className="hidden"
                                                name="selectedGallery"
                                                value={ gallery.id }
                                                type="radio"
                                                id={'color-btn-' + i}
                                                onChange={this.onSelectGalleryChange}
                                            />
                                            <label htmlFor={'color-btn-' + i}>
                                                <img src={ __INTERNAL_API_URL__ + gallery.collection[0] } />
                                            </label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="gallery__wrapper__controls__views">
                            <div className="gallery__wrapper__controls__views__title">
                                <h1>галерея</h1>
                            </div>
                            <div className="gallery__wrapper__controls__views__buttons">
                                {
                                    selectedGallery && selectedGallery.collection.map((image, i) =>
                                        <div
                                            className={
                                                classNames('gallery__wrapper__controls__views__buttons__button',
                                                { 'gallery__wrapper__controls__views__buttons__button--selected': +this.state.selectedImageId === +i })
                                            }
                                            key={ i }>
                                            <input
                                                className="hidden"
                                                name="selectedImage"
                                                value={ i }
                                                type="radio"
                                                id={'view-btn-' + i}
                                                onChange={this.onSelectImageChange}
                                            />
                                            <label htmlFor={'view-btn-' + i}>
                                                <img src={ __INTERNAL_API_URL__ + image } />
                                            </label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onSelectGalleryChange(e) {
        this.setState({
            selectedGalleryId: e.target.value
        });
    }

    onSelectImageChange(e) {
        this.setState({
            selectedImageId: e.target.value
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.galleriesList.length && !prevState.selectedGalleryId) {
            return {
                selectedGalleryId: nextProps.galleriesList[0].id
            };
        } else {
            return null;
        }
    }
}

Gallery.propTypes = {
    gallery: PropTypes.object
};

export default Gallery;