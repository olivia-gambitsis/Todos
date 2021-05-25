import React from "react";
import { TasksContext } from "../TasksContext";
import AddTodo from "./AddTodo";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";

export default function App() {
  const store = React.useContext(TasksContext)
  return (
    <>
    {console.log(store)}
      <AddTodo />
      <Route exact path="/" component={Main} />
      <Footer />
    </>
  );
}
