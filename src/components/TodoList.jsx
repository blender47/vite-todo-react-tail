import TodoItem from "./TodoItem"
//import PropTypes from 'prop-types'

const TodoList = ({todos, updateTodo, removeTodo}) => {
    return( 
        <div className="mt-8 rounded-t-md bg-white">

            {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
                ))}
         
        </div>
    )
 }

 export default TodoList