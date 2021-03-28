import {useState} from 'react'

const Tasks = () => {
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
        <>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}    
        </>
    )
}

export default Tasks
