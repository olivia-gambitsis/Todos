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

    return(
        <TasksContext.Provider value='data from store'>
            {props.children}
        </TasksContext.Provider>

    )

}


