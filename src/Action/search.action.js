
import React from 'react';
import getServiceTrainDetails  from '../Service/Search.service';
import { constants } from '../constants';
import redux from 'redux';
import store from '../store'
import { useDispatch } from 'react-redux';

//const dispatch = useDispatch();

function getActionTrainDetails(search) {
    console.log(search);
    let data;
    return dispatch => { 
    dispatch(request())
     getServiceTrainDetails(search).then(response => {
        if(response.status === 200) {
            data = response.data;
            console.log(response);
            dispatch(success(data));
        }
        })
        .catch(err => { 
            console.log(err);
            dispatch(failure()) 
        });
    };

function request() {
    return { type : constants.API_REQUEST }
}

function success(data) {    
    return { type : constants.API_SUCCESS, data }
}

function failure() {
    return { type : constants.API_FAILURE }
}

}

export default getActionTrainDetails;