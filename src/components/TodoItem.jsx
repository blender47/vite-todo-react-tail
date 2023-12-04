import IconCheck from "./icons/IconCheck"
import IconCross from "./icons/IconCross"

const TodoItem = ({todo, updateTodo}) => {
    return(
        <article className="flex gap-4 py-4 border-b border-b-gray-400 items-center px-4">
            <button onClick={()=>updateTodo(todo.id)} className={`w-5 h-5 flex-none rounded-full border-2 ${todo.completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "inline-block"}`} >
                { todo.completed && <IconCheck /> }    
            </button>
            <p className={`text-gray-600 grow ${todo.completed && 'line-through'}`}>{todo.title}</p>
            <button className="flex-none"><IconCross /></button>
          </article>
    )
 }

 export default TodoItem