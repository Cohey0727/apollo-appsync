import React from "react";
import "./App.css";
import { useGetTodoQuery } from "./generated/graphql";

function App() {
  const { data } = useGetTodoQuery();
  const todo = data?.getTodo;
  return (
    <div className="App">
      ID: {todo?.id}, Name: {todo?.name}
    </div>
  );
}

export default App;
