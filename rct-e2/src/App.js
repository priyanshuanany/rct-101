import { useFocusEffect } from "@chakra-ui/react";
import React from "react";
import {useState, useEffect} from "react";

const App = () => {
  const [newTodo, setNewTodo] = useState(" ");
  const [todos, setTodos] = useState([]);
  const Info = () =>{
    fetch("http://localhost:8080/",{
      method: "POST",
      headers: {
        "content-type"="application/json",
      }
      body: JSON.stringify({
        text: newTodo,
        isCompleted: false,
      }),
    })
    .then((r)=>r.json())
    .then((d)=>{
      setNewTodo("");
    });
  }
  useEffect(()=>{
    fetch("http://localhost:8080/")
  })
  return <div>{/* TODO: Code here */}</div>;
};

export default App;
