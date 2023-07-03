const Todo1List = ({todos , requestView}) => {
    return ( 
        <div className="w-full bg-blue-300">
            <div>List</div>
            <ul>
                {todos.map(todos => 
                <li key={todos.tno}
                onClick={() => requestView(todos.tno)}
                >{todos.tno} - {todos.title}
                </li>)}
            </ul>
        </div>
     );
}
 
export default Todo1List;