export const TodoItem = ({todo,handleStatus}) =>{

    return (
        <div className="eachElement">
        <p>{todo.title} - {todo.status ? "Done":"Not Done"}</p>
        {/* <li type="circle" class="circle"></li> */}
        {/* <input className="empty" type="checkbox"/>  */}
        <button onClick = {()=>handleStatus(todo.id)} className="empty" >T</button>
      </div>
    )
}