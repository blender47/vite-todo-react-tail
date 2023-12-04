import TodoItem from "./TodoItem"
//import PropTypes from 'prop-types'

const TodoList = ({todos}) => {
    return( 
        <div className="mt-8 rounded-t-md bg-white">

            {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
         
        </div>
    )
 }

//  TodoList.propTypes={
//     prop: PropTypes.array
//  }

 export default TodoList