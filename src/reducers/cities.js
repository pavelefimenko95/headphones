import * as citiesActionConstants from '../constants/actions/cities';

const initialState = {
    isRequestPending: false,
    citiesList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case citiesActionConstants.CITIES_REQUEST_PENDING:
            return {
                ...state,
                isRequestPending: true
            };
        case citiesActionConstants.CITIES_REQUEST_FULFILLED:
            return {
                ...state,
                isRequestPending: false
            };
        case citiesActionConstants.LOAD_CITIES:
            return {
                ...state,
                citiesList: action.data.citiesList
            };
        default:
            return state;
    }
};