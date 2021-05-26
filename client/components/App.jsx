import React from "react";
import { TasksContext } from "../TasksContext";
import AddTodo from "./AddTodo";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import { getAllTasksAPI } from "../apis/todoAPI";

export default function App() {
  const { state, dispatch } = React.useContext(TasksContext);

  const fetchDataAction = async () => {
    const data = await getAllTasksAPI();
    console.log(data)
    return dispatch({
      type: "FETCH_TASKS",
      payload: data,
    });
  };

  React.useEffect(() => {
    state.tasks.length === 0 && fetchDataAction();
  });
  return (
    <>
    {console.log(state)}
      <AddTodo />
      <Route exact path="/" component={Main} />
      <Footer />
    </>
  );
}
