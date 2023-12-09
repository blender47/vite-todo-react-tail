import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialState = [
//   {id: 1, title: "Complete Online course on bluuweb", completed: true },
//   {id: 2, title: "Go to the gym", completed: false },
//   {id: 3, title: "10 minutes meditation", completed: false },
//   {id: 4, title: "pickup groceries", completed: false },
//   {id: 5, title: "Complete todo app en frontendmentor", completed: false }
// ]
const initialState = JSON.parse(localStorage.getItem('todos')) || [] 
const App = () => { 
  const [todos, setTodos] = useState(initialState)
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
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

  const clearComplete = ()=>{
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter] = useState('all')
  const changeFilter = (filter) => setFilter(filter)
  const filteredTodos = () =>{
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter((item) => !item.completed)
      case 'completed':
        return todos.filter((item) => item.completed)
      default:
        return todos
    }
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header />
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">

      <TodoCreate createTodo={createTodo}/>

      <TodoList todos={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />  
         
      <TodoComputed computedItemsLeft={computedItemsLeft} clearComplete={clearComplete}/>    

      <TodoFilter changeFilter={changeFilter} filter={filter}/>  

      </main>
      <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-1000">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
