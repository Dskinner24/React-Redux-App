import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchPlayer } from '../store/actions/playerActions';

const Players = (props) => {
    useEffect(() => {
        props.fetchPlayer();
    },[]);

    return (
        <div>
            <h1>NBA PLAYER</h1>
            {props.isFetching && (
                <Loader type='Puff' color='#00BFFF' height={100} width={100} />
            )}
            {props.player && <h3>"{props.player}"</h3>}
            
            {props.error && <p className='error'>{props.error}</p>}

            <button onClick={props.fetchPlayer}>Fetch A New Player</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        player: state.player.player,
        isFetching: state.player.isFetching,
        error: state.player.error,
    };
};

export default connect(
    mapStateToProps,
    { fetchPlayer },
)(Players);