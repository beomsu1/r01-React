import { useEffect, useState } from "react";
import { getTodo, putTodo, removeTodo } from "../api/todoAPI";

const initState = {
    tno:0,
    title : ''
}


const Todo2Read = ({target,changeView}) => {

    const [todo, setTodo] = useState(initState)
    
    // 컴포넌트 내에서 재호출을 하기 위해 사용
    const [refresh , setRefresh] = useState(false)

    // target값이 변경되면 useEffect 하겠다!
    useEffect(() => {

        //getTodo 해서 가져온 data 값을 setTodo를 하겠다!
        getTodo(target).then(data => {
            setTodo(data)
        })

        // target을 의존 주입
    }, [target, refresh])

    // 딜리트 버튼을 클릭했을 떄
    const handleClickDel = async() => {

        // const res = await removeTodo(target)
        const {result} = await removeTodo(target) // res 의 구조분해할당

        // res 값은 {result:'success'}

        if(result === 'success'){
            alert("삭제되었습니다.")
        }
        changeView("list")

    }

    const handleClickMod = async () => {

        const {result} = await putTodo(todo)

        if(result === 'success'){
            alert("수정되었습니다.")
        }

        // 지금의 반대되는 값을 추가해줘서 상태를 바뀌게 하자!
        setRefresh(!refresh)
    }

    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div>{todo.title}</div>
            <div>
                <input type="text" value={todo.title} onChange={e => {
                    todo.title = e.target.value
                    setTodo({...todo})
                }}></input>
            </div>
            <div className="flex p-4">
                <button className="m-2 p-2 border-2 bg-blue-500" onClick={handleClickMod}>MOD</button>
                <button className="m-2 p-2 border-2 bg-red-500"  onClick={handleClickDel}>DEL</button>
            </div>
        </div>
     );
}
 
export default Todo2Read;