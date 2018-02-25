const initialState = {
    data: null
};

const userReducer = (state = initialState, action) => {
    if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED')
    {
        return Object.assign({}, state, {
            data: action.payload
        })
    }

    if (action.type === 'USER_LOGGED_OUT')
    {
        return Object.assign({}, state, {
            data: null
        })
    }

    if (action.type === 'GET_BALANCES_SUCCESS')
    {
        return Object.assign({}, state, {
            balance: action.payload
        })
    }

    if (action.type === 'GET_PLATES_SUCCESS')
    {
        return Object.assign({}, state, {
            plates: action.payload
        })
    }

    return state
};

export default userReducer
