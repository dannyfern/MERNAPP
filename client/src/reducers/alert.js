import { SET_ALERT, REMOVE_ALERT } from '../actions/constants';

const initialState = [
   
];

export default function (state = initialState, alert) {
    const { type, payload } = alert;
    switch(type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
            default:
                return state;
    }
}