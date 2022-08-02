
//컴포넌트들을 합쳐놓은 상태를 말하는게 pages. 
// 쪼개놓은 컴포넌트들의 html을 정의하는곳이 components
//폴더명은 자유, 대신 쪼갰으면 합치는곳이 있어야 하고, 쪼갠 모여진애들
// 그 쪼개진것을 합친것을 App.js 에다가 보여주면 된다. 
import TodoForm from "../components/1.todoForm"
import TodoList from '../components/todoList'
import TodoTitle from '../components/todoTitle'

const Todo = () =>{
  return(
    <>
    <TodoTitle />
    <TodoForm />
    <TodoList/>
    </>
  )
}
export default Todo