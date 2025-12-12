"use client"

import { useState } from "react";
import { text } from "stream/consumers";

type Todo = {
  input: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const removeTodo = (index: number ) => {setTodos(todos.filter((_,i) => i !==index))};

  const addTodo = (e) => {
    e.preventDefault(); // prevent page reload
    if (!input) return;              // skip empty input
    setTodos([...todos, {input, completed: false}]);     // add to list
    setInput("");                    // clear input
  };
  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } :todo
      )
    );
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex  w-full max-w-sm flex-col  py-32  bg-white dark:bg-gray rounded-lg shadow-blue-300 shadow-2xl shadow-[0_20px_60px_rgba(59,130,246,0.5) border-2 border-blue-300">
        
          
        <div className="flex flex-col  gap-6 text-center  ">
          <h1 className=" text-3xl font-semibold text-center mb-4">
           To Do app
          </h1>
         <div>
           <form onSubmit={addTodo}>
          <input 
          type="text"
          className="input-field border-2 rounded"
          id="todoInput"
          placeholder="Add new to do "
          value={input}
          onChange={(e) => setInput(e.target.value)}
           
          />
       
       <button
        type="submit"
        className="btn bg-blue-500 text-white px-4 py-1.5 rounded-md shadow-md shadow-blue-300 hover:bg-blue-300 transition"
        >
        ADD
        </button>
        </form>


        <p className="text-center mt-2"><span>{todos.length}</span>{todos.length=== 1  ? "   item" : "   items"}</p>

       
       
        <div className=" "></div>

           <ul className="w-full mt-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                className=" flex justify-between items-center border-b border-gray-200 py-1 px-2order-b border-gray-200 py-1 text-center"
              >
                <span
                onClick={() => toggleTodo(index)}
                className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
                >{todo.text}
                 </span>
                <button
                onClick={() => removeTodo(index)}
                className="ml-2 text-red-500 hover:text-red-700">

                  ❌
                </button>

              </li>
            ))}
          </ul>
          <button
          onClick={()=> setTodos([])}
          className="btn bg-blue-500 text-white px-4 py-1.5 rounded-md shadow-md shadow-blue-300 hover:bg-blue-300 transition">
            Clear List
          </button>



        </div>
        </div>
      </main>
    </div>
  );
}
