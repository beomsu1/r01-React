import { useState } from "react";
import { getList } from "../api/todoAPI";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";

const Todo2 = () => {

    // 기본 상태는 list로
    const[cmd , setCmd] = useState("list")

    const changeView = (value) => {
        setCmd(value)
    }

    const getView = () => {

        if(cmd == 'list'){
            return <Todo2List changeView={changeView}></Todo2List>
        }else if( cmd == 'input'){
            return <Todo2Input changeView={changeView}></Todo2Input>
        }

    }

    return ( 
        <div>
            {/* 호출한 결과 */}
            {getView()}
        </div>

     );
}
 
export default Todo2;