import  './App.css';
import Task from './component/Task';
import Tassk1 from './component/Tassk1';
import TaskThree from './component/TaskThree';
import Taskfour from './component/Taskfour';
import ProductPage from './component/ProductPage';
import TodoList from './component/TodoList';
import Home from './component/Home';
import TaskTwo from './component/TaskTwo';
function App() {
    return (
        <div>
           {/*<Demo/>
           <TaskThree/> */}
          <Task/>
          <Tassk1/>
          <TaskThree/>
          <Taskfour/>
          <TaskTwo/>
          <ProductPage/>
          <TodoList/>
          <Home/>
        </div>
    )
}
export default App;