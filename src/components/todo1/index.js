import uuid from "react-uuid";
import Todo1Input from "./Todo1Input";
import Todo1List from "./Todo1List";
import Todo1Read from "./Todo1Read";
import { useState } from "react";

const Todo1 = () => {

    // requestView 상태를 관리하기 위한 상태 선언
    const [current , setCurrent] = useState(null)

    const [todos, setTodos] = useState([])

    const addTodo = (todoObj) => {
        console.log(uuid() , todoObj)

        // todos 배열의 모든 요소와 새로운 요소를 표함하는 배열 생성
        setTodos([...todos, {tno:uuid(), ...todoObj}])
    }
    
    // requestView가 호출되면 todos 배열에서 tno값과 일치하는 첫 번쨰 요소인 target을 찾는다.
    const requestView = (tno) => {

        // todo 배열을 순회하면서 todo.tno = tno 값과 일치하는 요소들을 필터링
        const target = todos.filter(todo => todo.tno === tno)[0]

        console.log("requsetView" , target)

        // target 값을 setCurrent 함수에 대입해서 current값을 업데이트
        setCurrent(target)
    }

    // 삭제 기능
    // tno를 찾아서 삭제하기
    const remove = (tno) => {

        // (todos.filter(todo => todo.tno !== tno )) 결과가 배열이라 setTodos 안에 들어갈 수 있음
        setTodos(todos.filter(todo => todo.tno !== tno ))

        // current 상태를 null로 DEL 버튼을 누르면 안 보이게 설정
        setCurrent(null)

    }

    // 수정기능
    // todo 바꾸기
    const modify = (modifyTodo) => {

        // 필터링 해서 tno 찾기
        const target = todos.filter(todo => todo.tno === modifyTodo.tno)

        target.title = modifyTodo.title

        setTodos([...todos])

        setCurrent(null)
    }

    return ( 
    <div>
        <div>Todo</div>
        <div>
            <Todo1Input addTodo={addTodo}></Todo1Input>
            <Todo1List todos={todos} requestView={requestView}></Todo1List>
            <Todo1Read current={current} remove={remove} modify={modify}></Todo1Read>
        </div>
    </div>
    );
}
 
export default Todo1;