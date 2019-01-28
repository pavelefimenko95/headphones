import * as galleriesActionConstants from '../constants/actions/galleries';

const initialState = {
    isRequestPending: false,
    galleriesList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case galleriesActionConstants.GALLERIES_REQUEST_PENDING:
            return {
                ...state,
                isRequestPending: true
            };
        case galleriesActionConstants.GALLERIES_REQUEST_FULFILLED:
            return {
                ...state,
                isRequestPending: false
            };
        case galleriesActionConstants.LOAD_GALLERIES:
            return {
                ...state,
                galleriesList: action.data.galleries
            };
        default:
            return state;
    }
};