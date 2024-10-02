import { CommonActions } from "@react-navigation/native";

let navigator; 


export const  setNavigation = nav => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
         CommonActions.navigate({
            name: routeName,
            params
        })
    )
};