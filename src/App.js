
import './App.css';
import Header from "./My Components/Header";
import { Todos } from "./My Components/Todos";
import { Footer } from "./My Components/Footer";
import { AddTodo } from "./My Components/AddTodo";

import React, { useState, useEffect } from 'react';


function App() {
 


  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
   
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to market for shopping",
    },
    {
      sno: 1,
      title: "Go to cinema",
      desc: "You need to go to market for enjoying",
    },
    {
      sno: 1,
      title: "Go to delhi",
      desc: "You need to go to market for job",
    },
  ]);
     

  return ( 
    <>
      <Header title= "My todos list" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  
    );
  
}
export default App