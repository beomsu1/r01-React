import { useEffect, useState } from "react";
import { getList } from "../api/todoAPI";

// 렌더링 할 떄 데이터가 비어 있으면 오류 나니까 빈 상태 만들기
const initState = {dtoList:[]}


const Todo2List = ({changeView}) => {

    const [data , setData] = useState(initState)

    useEffect(() => {

        // 원래 res.data 인데 이 값의 이름은 내가 지정할 수 있으니 result라고 지정
        getList().then(result => {
            console.log(result)
            setData(result)
        })
    }, [])


    return ( 
        <div className="w-full h-[100vh] bg-sky-200 ">
            <div className="text-3xl">Todo2List
            <button
            onClick={()=>changeView('input')}>INPUT</button>
            </div>

            <ul>
                {data.dtoList.map(todo => <li key={todo.tno}>{todo.tno} - {todo.title}</li>)}
            </ul>
        </div>
     );
}
 
export default Todo2List;