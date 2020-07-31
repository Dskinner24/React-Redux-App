import { FETCH_PLAYER_START, FETCH_PLAYER_SUCCESS, FETCH_PLAYER_FAIL } from "../actions/playerActions";

const initialState = {
    isFetching: false,
    player: '',
    error: '',    
};

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYER_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_PLAYER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                player: action.payload,
                error: ''
            };
        case FETCH_PLAYER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
};