import * as productConstants from '../constants/product';

export default itemType => {
    switch(itemType) {
        case productConstants.MOUSE:
            return {
                pageTitle: 'мыши',
                productType: productConstants.MOUSE
            };
        case productConstants.KEYBOARD:
            return {
                pageTitle: 'клавиатуры',
                productType: productConstants.KEYBOARD
            };
        case productConstants.HEADPHONES:
            return {
                pageTitle: 'наушники',
                productType: productConstants.HEADPHONES
            };
    }
};