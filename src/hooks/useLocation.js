import {
  Accuracy,
  requestForegroundPermissionsAsync,
  startLocationUpdatesAsync,
  hasStartedLocationUpdatesAsync,
  stopLocationUpdatesAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import * as TaskManager from "expo-task-manager";

const LOCATION_TASK_NAME = "background-location-task";
let callbackRef = { current: null };

export default useLocation = (trackUser, callback) => {
  const [err, setErr] = useState(false);
  const locSubcriber = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const startTracking = async () => {
    try {
      await requestForegroundPermissionsAsync();

      // if location background service is running
      const hasStarted =
        await hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);

      if (!hasStarted) {
        const locSub = await startLocationUpdatesAsync(LOCATION_TASK_NAME, {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
          foregroundService: {
            notificationTitle: "Employee location tracking",
            notificationBody:
              "As an employee, your location is being tracked relative to your office premise",
          },
        });

        locSubcriber.current = locSub;
      }
    } catch (err) {
      setErr(err);
    }
  };

  const stopLocationTracking = async () => {
    try {
      await stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    if (trackUser) {
      startTracking();
    } else {
      stopLocationTracking();
      if (locSubcriber.current) locSubcriber.current.remove();
    }

    return () => {
      if (locSubcriber.current) locSubcriber.current.remove();
    };
  }, [trackUser, callback]);

  return [err];
};

// Register location background task
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) return console.error(error);

  if (data) {
    const { locations } = data;

    if (callbackRef.current) {
      callbackRef.current(locations);
    }
  }
});
