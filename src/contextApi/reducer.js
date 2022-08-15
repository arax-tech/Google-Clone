
export const initialState = {
    term: null
};

export const actionType = {
    SET_SEARCG_TERM : "SET_SEARCG_TERM",}

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case actionType.SET_SEARCG_TERM:
            return {
                ...state,
                term: action.term,
            }
        default:
            return state;
    }
}

export default reducer;