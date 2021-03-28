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
  
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
