import { useState } from "react";
import { TodoInput } from "./todoInput"
import "./todo.css";

function Todo (){
   const [todoList, setTodoList] = useState([])
   const getData = (todo) =>{                      // this is call back function recive to data from todoinput components and render that data
    //    console.log("recived Data:",todo)
    setTodoList([...todoList, todo])
   }
    return (
    <div className="Todo">
     <TodoInput  getData={getData}/>
     {todoList.map((e)=>(
        <div className="eachElement">
          <p>{e}</p>
          {/* <li type="circle" class="circle"></li> */}
          <div className="empty"></div>
        </div>
        
     ))}
    </div>
    );
}
export {Todo}