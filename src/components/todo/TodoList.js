const TodoList = ({arr , removeFn}) => {

    return ( 
        <div>
            <ul>
                {/* arr 배열의 각 요소를 <li>Todo</li>를 생성하고 ul태그 안에 넣어서 목록형태로 표시 */}
                {arr.map(todo => 
                <li className="m-3 text-3xl p-3"key={todo.tno}>{todo.tno} - {todo.title}
                <button className="bg-red-200"
                onClick={() => removeFn(todo.tno)}
                >DEL</button>
                </li>)}
            </ul>
        </div>
     );
}
 
export default TodoList;