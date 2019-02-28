import axios from 'axios';

export const createOrder = (data, push) => () => {
    return axios.post('/database/create/order', data).then(() => {
        push(`/order-success/${data.id}`);
    });
};