import { createNavigationContainerRef } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

let navigator;

export const setNavigation = (nav) => {
  navigator = nav;
};

export const navigate1 = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
