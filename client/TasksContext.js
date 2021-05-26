import React from "react";

export const TasksContext = React.createContext();

const initialState = {
    tasks: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_TASKS':
          return { ...state, tasks: action.payload };
        default:
          return state;
      }
}

export const TasksProvider = (props) =>{

    const [state, dispatch] = React.useReducer(reducer, initialState)
    const value = {state, dispatch}
    return(
        <TasksContext.Provider value={value}>
            {props.children}
        </TasksContext.Provider>

    )

}


