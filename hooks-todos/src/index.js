import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ToDosContext from "./context";
import ToDosReducer from "./reducer";
import ToDoList from "./components/ToDoList";

const App = () => {
  const initailState = useContext(ToDosContext);
  const [state, dispatch] = useReducer(ToDosReducer, initailState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </ToDosContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
