const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export default function login(state = INITIAL_STATE, action){
    switch (action.type){
        case "LOGIN_RESQUEST":
            return { ...state, loading: true }
        case "SUCCESS_LOGIN":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_LOGIN":
            return { data: action.payload.data, loading: false, error: true }
        default:
            return state
    }
}