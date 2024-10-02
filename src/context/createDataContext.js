import React, { useReducer } from "react";

export default function (reducer, actions, _state) {
    const Context = React.createContext();

    const Provider = ({ children }) => {  
        const [state, dispatch] = useReducer(reducer, _state);

        const boundActions = {};

        Object.keys(actions).forEach(key => {
            boundActions[key] = actions[key](dispatch);    
        });

        return <Context.Provider value={{state, ...boundActions}}>
            {children}
        </Context.Provider>
    }

    return {Provider, Context};
}

