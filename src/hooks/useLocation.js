import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useRef, useState } from "react";

export default  useLocation = (trackUser, callback) => {
    const [err, setErr] = useState(false);
    const locSubcriber = useRef(null);

    const startTracking = async () => {
        try {
            await requestForegroundPermissionsAsync();

            const locSub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                // distanceInterval: 1000,
            }, callback);

            locSubcriber.current = locSub;
        } catch (err) {
            setErr(true)
        }
    }
  
    useEffect(() => {

        if (trackUser){
            startTracking()
        } else{
            if(locSubcriber) locSubcriber.current.remove();
        }

        return () => {
            if (locSubcriber) locSubcriber.current.remove();
        }
    }, [trackUser, callback]);

  return [err]
}
