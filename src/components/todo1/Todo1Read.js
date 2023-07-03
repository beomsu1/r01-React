import { useEffect, useState } from "react";

const Todo1Read = ({current , remove , modify }) => {

    const [todo,setTodo] = useState(current)

    
    useEffect(()=>{
        setTodo(current)
        // 의존성 배열로 사용
    }, [current])

    if(!todo){
        return <>Not Available</>
    }


    return ( 
        <div className="w-full bg-orange-400">
            <div>Read</div>
            <div>
                {todo.tno}
            </div>
            <div>
            <input 
                type='text' 
                name='title' 
                value={todo.title} 
                onChange={(e) =>{ 
                    todo.title = e.target.value 
                    setTodo({...todo})
                }}/>
            </div>
            <button className="m-1 p-2 bg-blue-500"
            onClick={() => modify(todo)}
            >MOD</button>
            <button className="m-1 p-2 bg-red-500"
            onClick={()=>remove(todo.tno)}
            >DEL</button>
        </div>
     );
}
 
export default Todo1Read;