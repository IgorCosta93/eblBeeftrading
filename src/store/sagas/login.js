import { takeLatest, put, call, select } from 'redux-saga/effects';
const axios = require('axios');

function apiLogin(body){
    console.log(body)
    return axios.post("http://localhost:3333/users/authenticate", body , 
        {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
  
export function* login(action){
    try{
        const response = yield call(apiLogin, action.body);
        yield put({ type: "SUCCESS_LOGIN", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_LOGIN", payload: { data: err } });
    }
}