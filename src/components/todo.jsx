import { useState } from "react";
import { TodoInput } from "./todoInput"
import "./todo.css";
import { TodoItem } from "./todoItem";
import {nanoid} from "nanoid";

function Todo (){
   const [todoList, setTodoList] = useState([])
   const getData = (todo) =>{                      // this is call back function recive to data from todoinput components and render that data
    //    console.log("recived Data:",todo)
    const playLoad = {
       title:todo, 
       status:false,
       id :nanoid(5)
    }
    setTodoList([...todoList, playLoad])
   }
   const handleStatus = (id) =>{
      // console.log("id",id)
      // setTodoList([...todoList.map((e)=>(e.id===id ? {...e,status:!e.status}:e))])
      let newArr = todoList.map((e)=>{
         if (e.id===id){
            return {
               ...e,
               status:!e.status
            }
         }
         return e;
      })
      setTodoList(newArr)
   }
    return (
    <div className="Todo">
     <TodoInput  getData={getData}/>
     {todoList.map((e)=>(
        <TodoItem handleStatus = {handleStatus} todo ={e}/>
        
     ))}
    </div>
    );
}
export {Todo}