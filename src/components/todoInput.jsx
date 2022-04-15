import { useState } from "react"
import"./todo.css"
export  const TodoInput = ({getData}) =>{
   const [text ,setText] = useState("")
    return (
    <div className="TodoInput">
    <input onChange = {(e)=>{
        setText(e.target.value)
    }} type="text" placeholder="Enter input" id="input" />
     <button onClick = {() => {
          getData(text)
     }} class="btnAdd">+</button>
    </div>
    );
}