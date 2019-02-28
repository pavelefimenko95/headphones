import axios from 'axios';
import * as postOfficesActionConstants from '../constants/actions/postOffices';

export const loadPostOffices = ref => async dispatch => {
    try {
        dispatch({
            type: postOfficesActionConstants.POST_OFFICES_REQUEST_PENDING
        });

        let { data } = await axios.get(`/utils/load-post-offices?ref=${ ref }`);

        dispatch({
            type: postOfficesActionConstants.LOAD_POST_OFFICES,
            data
        });
        dispatch({
            type: postOfficesActionConstants.POST_OFFICES_REQUEST_FULFILLED
        });
    } catch(e) {
        dispatch({
            type: postOfficesActionConstants.POST_OFFICES_REQUEST_FULFILLED
        });
        console.error(e);
    }
};