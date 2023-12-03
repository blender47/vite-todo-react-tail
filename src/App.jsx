import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8" >
        <div className="flex justify-between">
          <h1 className="uppercase font-semibold text-white text-2xl tracking-[0.3em]">TODO</h1>
          <button><MoonIcon /></button>
        </div>
        <form className="mt-8 flex gap-4 bg-white rounded-md overflow-hidden py-4 items-center px-4">
          <span className="w-5 h-5 rounded-full border-2 inline-block"></span>
          <input type="text" placeholder="Create a new Todo..." className="w-full outline-none text-gray-400"/>
        </form>
      </header>  
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 py-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none w-5 h-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-600 grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none w-5 h-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-600 grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 items-center px-4">
            <button className="flex-none w-5 h-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-600 grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
         
          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8 ">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
