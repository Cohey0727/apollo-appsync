import React from "react";
import "./App.css";
import { useListEventsQuery } from "./generated/graphql";

function App() {
  const { data } = useListEventsQuery();

  return (
    <div className="App">
      <ol>
        {data?.listEvents?.items?.map((item) => {
          return (
            <li key={item?.id}>
              {item?.name} 場所:{item?.where} 日時:{item?.when}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
