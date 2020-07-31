import axios from 'axios';

export const FETCH_PLAYER_START = 'FETCH_PLAYER_START';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_FAIL = 'FETCH_PLAYER_FAIL';

export const fetchPlayer = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_PLAYER_START });
        axios
            .get('https://api.kanye.rest/')
            .then((res) => {
                dispatch({ 
                      type: FETCH_PLAYER_SUCCESS, 
                      payload: res.data.quote});
              })

            .catch((err) => {
                
                dispatch({ 
                    type: FETCH_PLAYER_FAIL, 
                    payload: 'Could not process your request'});
            })
    }
}