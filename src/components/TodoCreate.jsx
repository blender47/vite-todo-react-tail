import { useState } from "react"

const TodoCreate = ({createTodo}) => {
const [title, setTitle] = useState("")

const handleSubmit = (e) =>{
  e.preventDefault()
  if(!title.trim()){
    return setTitle("")
  }

  createTodo(title)
  setTitle("")
}

    return(
        <form onSubmit={handleSubmit} className="flex gap-4 bg-white rounded-md overflow-hidden py-4 items-center px-4">
          <span className="w-5 h-5 rounded-full border-2 inline-block"></span>
          <input 
          type="text" 
          placeholder="Create a new Todo..." 
          className="w-full outline-none text-gray-400"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </form>
    )
}

export default TodoCreate