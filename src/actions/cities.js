import axios from 'axios';
import * as citiesActionConstants from '../constants/actions/cities';

export const loadCities = () => async dispatch => {
    try {
        dispatch({
            type: citiesActionConstants.CITIES_REQUEST_PENDING
        });

        let { data } = await axios.get('/utils/load-cities');

        dispatch({
            type: citiesActionConstants.LOAD_CITIES,
            data
        });
        dispatch({
            type: citiesActionConstants.CITIES_REQUEST_FULFILLED
        });
    } catch(e) {
        dispatch({
            type: citiesActionConstants.CITIES_REQUEST_FULFILLED
        });
        console.error(e);
    }
};