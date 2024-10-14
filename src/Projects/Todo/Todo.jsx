import { useState } from "react"

import "./Todo.css"
import { TodoForm } from "./TodoFrom";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";



export const Todo = () =>{
    const [task,setTask] = useState( () => getLocalStorageTodoData());
    

   
    const handleFormSubmit =(inputValue)=>{
      const {id,content,checked} = inputValue;
 //to  check
      if(!content) return;
    
    //   if(task.includes(inputValue))return;
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content
);
if(ifTodoContentMatched) return;
    

      setTask((prevTask) =>[...prevTask,{id,content,checked}]);
    

    
    }

    

// todo add data to localStorage
  setLocalStorageTodoData(task);


    //todo handleDeleteTodo function
    const handleDeleteTodo = (value) =>{
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData functionality
    const handleClearTodoData = () =>{
        setTask([]);
    };

    // halndleCheckedTodo
    const halndleCheckedTodo = (content) =>{
      const updatedTask = task.map((curTask) =>{
         if(curTask.content === content){
            return{...curTask,checked : !curTask.checked };
         }else{
            return curTask;
         }
      });
      setTask(updatedTask);
    };
    


   return <section className="todo-container">
    <header>
        <h1>Todo List</h1>
        <TodoDate/>
        
    </header>
   <TodoForm onAddTodo={handleFormSubmit}/>
    <section className="myUnOrdList">
        <ul>{
            task.map((curTask)=>{
                return <TodoList key={curTask.id} data={curTask.content} 
                checked={curTask.checked}
                onHalndleDeleteTodo={handleDeleteTodo}
                onHalndleCheckedTodo={halndleCheckedTodo}
                />
            })
        }
        </ul>
    </section>
    <section>
        <button className="clear-btn" onClick={handleClearTodoData}>CLear All</button>
    </section>
   </section>
};