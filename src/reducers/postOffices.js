import * as postOfficesActionConstants from '../constants/actions/postOffices';

const initialState = {
    isRequestPending: false,
    postOfficesList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case postOfficesActionConstants.POST_OFFICES_REQUEST_PENDING:
            return {
                ...state,
                isRequestPending: true
            };
        case postOfficesActionConstants.POST_OFFICES_REQUEST_FULFILLED:
            return {
                ...state,
                isRequestPending: false
            };
        case postOfficesActionConstants.LOAD_POST_OFFICES:
            return {
                ...state,
                postOfficesList: action.data.postOfficesList
            };
        default:
            return state;
    }
};