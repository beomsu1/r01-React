import { useState } from "react";

const Todo1Input = ({addTodo}) => {

    // title : '' 기본 설정 -> setTodo로 todo값 설정
    const [todo , setTodo] = useState({title: ''})

    return ( 
        <div className="w-full bg-pink-400" >
            <div>Input</div>
                <div className="m-3 p-3 bg-blue-600">
                    <input 
                    type="text" 
                    name="title"
                    // input 값이 변경될 떄 마다 todo.tile값을 변경하고 setTodo 함수로 todo값의 값을 변경
                    value={todo.title}
                    onChange={(e) => {
                        todo.title = e.target.value
                        setTodo({...todo})
                      }
                    }
                    />
                </div>
                <button className="bg-emerald-400 m-3 p-3 border-2"
                onClick={() => {
                    addTodo(todo)
                    setTodo({title: ''})
                  }}
                >Add Todo</button>
        </div>
     );
}
 
export default Todo1Input;