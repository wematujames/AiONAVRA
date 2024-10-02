import createDataContext from "../createDataContext";
import trackApi from "../api/trackApi";

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TRACK":
            return state;
       
        case "FETCH_TRACKS":
            return {
                ...state,
                tracks: action.payload,
            };
       
        case "CLEAR_TRACK_ERROR":
            return { ...state, errMsg: "" };

        default:
            return state;
    }
}

const  setErrorMsg = (dispatch, err) => {
    dispatch({ type: "AUTH_ERROR", payload: err })

    setTimeout(() => {
        dispatch({type: "CLEAR_TRACK_ERROR"})
    }, 3000);
}

const actions = {
    addLocation: (dispatch) => async (location, recording) => {
        dispatch({
            type: "ADD_CURRENT_LOCATION",
            payload: location,
        });
        console.log("context recording", recording)
        if (recording) {
             dispatch({
            type: "ADD_LOCATION",
            payload: location,
        });
        }
    },
    
    createTrack: (dispatch) => async (name, locations) => {
        try {
        
        const track = await trackApi.post("/tracks", {name, locations});

        // dispatch({
        //     type: "CREATE_TRACK",
        // });

        } catch (err) {
            console.log(err)
        }
    },
    
    getTracks: (dispatch) => async () => {
        const res = await trackApi.get("/tracks");
        
        dispatch({
            type: "FETCH_TRACKS",
            payload: res.data
        });
    },

    changeTrackName: (dispatch) => async (name) => {
        dispatch({
            type: "CHANGE_TRACK_NAME",
            payload: name
        });
    },
}

const state = {
    trackName: "",
    tracks: [],
    track: {},
}

const { Provider, Context } = createDataContext(
    reducer, actions, state,
);

export { Provider, Context }