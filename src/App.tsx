import './App.css';
import {TaskType, Todolist} from './Todolist';
import {useState} from 'react';

export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ])

    let [filter, setFilter] = useState<FilterValuesType>('All')

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    let tasksForTodolist = tasks
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      removeTask={removeTask}
                      tasks={tasksForTodolist}
                      changeFilter={changeFilter}

            />
        </div>
    );
}


export default App;
