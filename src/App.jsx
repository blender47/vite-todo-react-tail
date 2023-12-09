import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialState = [
  {id: 1, title: "Complete Online course on bluuweb", completed: true },
  {id: 2, title: "Go to the gym", completed: false },
  {id: 3, title: "10 minutes meditation", completed: false },
  {id: 4, title: "pickup groceries", completed: false },
  {id: 5, title: "Complete todo app en frontendmentor", completed: false }
]

const App = () => {
  const [todos, setTodos] = useState(initialState)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const updateTodo = (id)=>{
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
        return todo
    })
    setTodos(newTodos)
  }

  const removeTodo = (id)=>{
    setTodos(todos.filter(item => item.id != id))
  }

  const computedItemsLeft = todos.filter((item) => !item.completed).length

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <Header />
      <main className="container mx-auto mt-8 px-4">

      <TodoCreate createTodo={createTodo}/>

      <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />  
         
      <TodoComputed computedItemsLeft={computedItemsLeft}/>    

      <TodoFilter />  

      </main>
      <footer className="text-center mt-8">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
