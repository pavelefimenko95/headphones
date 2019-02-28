import axios from 'axios';
import * as galleriesActionConstants from '../constants/actions/galleries';

export const loadGalleries = () => async dispatch => {
    try {
        dispatch({
            type: galleriesActionConstants.GALLERIES_REQUEST_PENDING
        });

        let { data } = await axios.get('/database/load/galleries');

        dispatch({
            type: galleriesActionConstants.LOAD_GALLERIES,
            data
        });
        dispatch({
            type: galleriesActionConstants.GALLERIES_REQUEST_FULFILLED
        });
    } catch(e) {
        dispatch({
            type: galleriesActionConstants.GALLERIES_REQUEST_FULFILLED
        });

        console.error(e);
    }
};