import { useContext } from "react";
import { Context as LocationContext } from "../context/track/locationContext";
import { Context as TrackContext } from "../context/track/trackContext";
import { navigate } from "../utils/navigationRef";


export default () => {
  const {state: locationState, reset} = useContext(LocationContext);  
  const { createTrack,  } = useContext(TrackContext);

  const saveTrack = () => {
    createTrack(locationState.trackName, locationState.locations);
    reset()
    navigate("Tracks")
  };

  return [saveTrack];
};
