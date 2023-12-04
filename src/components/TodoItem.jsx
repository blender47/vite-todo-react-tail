import CrossIcon from "./icons/CrossIcon"

const TodoItem = ({todo}) => {
    return(
        <article className="flex gap-4 py-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none w-5 h-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-600 grow">{todo.title}</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
    )
 }

 export default TodoItem