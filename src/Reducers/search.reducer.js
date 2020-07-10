import { getActionTrainDetails } from '../Action/search.action';
import { constants } from '../constants';

var isSucess = false;
export default function searchReducer( state = {}, action) {

    switch(action.type) {

        case constants.API_REQUEST:
            console.log("reucer:- request");
            return {
                isSucess : isSucess,
                data : ''
            };

        case constants.API_SUCCESS:
            console.log("reucer:- sccess");
            console.log(action.data);
            return {
                ...state,
                isSucess : !isSucess,
                data : action.data
                
            };

        case constants.API_FAILURE:
            console.log("reducer:- error");
            return {
                ...state,
                isSucess : !isSucess,
                data : ''
            };
            
        default:
            return state;
    }
}