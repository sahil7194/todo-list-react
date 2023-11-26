import './App.css';
import Header from './components/Header';
import {Todos} from './components/Todos'
import Footer from './components/Footer';
import React,{useState, useEffect} from 'react';
import {AddTodo} from './components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './components/About';


function App() {
  let initTodos;
    if(localStorage.getItem('todos')){
      initTodos = JSON.parse(localStorage.getItem('todos'));
    }else{
      initTodos=[];
    }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
        return e !== todo;
    }));
    console.log('on delete ', todo);

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {

    const id  = todos.length?  todos[todos.length -1] +1 : 1;
    let newTodo = {id:id , title:title, desc:desc};

    setTodos([...todos,newTodo]);

    console.log('new to ',newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

  };


  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  return (
    <>
    <Router>
    <Header title="Todo List | Sahil" search={false} />
    <Switch>
    <Route  exact path='/' render={()=>{
        return (
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>
        )
      }}></Route>
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
     
    <Footer/>
    </Router>
    </>
  );
}

export default App;
