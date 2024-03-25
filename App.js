import React,{useState} from "react"


function App (){
  const[tasks,setTasks]=useState([]);
  const[inputValue,setInputValue]=useState('');

  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }
  const handleAddTask=()=>{
    if(inputValue.trim()!==''){
      setTasks([...tasks,inputValue]);
      setInputValue('');
    }
    else return( alert("Add task"))
  };
  
  const handleDeleteTask=index=>{
     let newTasks=[...tasks];
    newTasks.splice(index,1);
     setTasks(newTasks);
  }

return(
  <div className="App">
    <h1>Today's tasks</h1>
    <div className="task-input">
      <input type="text"placeholder="Add a task"
       value={inputValue} onChange={handleInputChange} ></input>
      <button onClick={(e)=>handleAddTask(e.target.value)}>Add</button>
    </div>
     <ul className="task-list">{
      tasks.map((task,index)=>(
        <li key={index}>
          {task}
          <button onClick={()=>handleDeleteTask(index)}>Delete</button>
          </li>
      ))}
      </ul>
    </div>
)
    }
      

export default App;
