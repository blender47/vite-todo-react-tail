import TodoItem from "./TodoItem"
//import PropTypes from 'prop-types'

const TodoList = ({todos, updateTodo, removeTodo}) => {
    return( 
        <div className="mt-8 rounded-t-md overflow-hidden bg-white dark:bg-gray-800 transition-all duration-1000">

            {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
                ))}
         
        </div>
    )
 }

 export default TodoList