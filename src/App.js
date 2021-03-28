import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1,
       text: 'Walk the dog so he stops chewing the furniture',
       day: 'March 28th at 19.00pm',
       reminder: true,
   }, 
   {id: 2,
       text: "Go to the pub they're opening!",
       day: 'April 26th at 19.00pm',
       reminder: true,
   }, 
   
   ])

   //Delete Task 
   const deleteTask= (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
   }
  
  return (
    <div className="container">
      <Header/>
      {tasks.length> 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Complete'}
    </div>
  );
}

export default App;
