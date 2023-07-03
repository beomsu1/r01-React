import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {

    const [todoArr, setTodoArr] = useState([])

    const addTodo = (newTodo) => {
        console.log("add todo" , newTodo)

        // ...todoArr 배열을 복사해서 newTodo를 추가한 배열 생성 -> setTodoArr 을 통해서 상태 업데이트
        setTodoArr([...todoArr,newTodo])
    }

    const remove = (tno) => {
        console.log("removeTodo" , tno)

        // todoArr 배열에서 tno와 일치하지 않는 todo.tno값을 가진 요소만 남긴 새로운 배열 생성
        setTodoArr(todoArr.filter((todo) => todo.tno !== tno))
    }

    return ( 
        <div>
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList arr={todoArr} removeFn={remove}></TodoList>
        </div>
     );
}
 
export default Todo;