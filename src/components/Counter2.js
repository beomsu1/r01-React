import { useState } from "react";

const Counter2 = () => {

    const [obj, setObj] = useState({num:10})
    // obj.num으로 호출

    return ( 

        <div>
            {obj.num}
            <button onClick={() => {
                obj.num += 1

                // 값만 변경되고 객체는 변경되지 않아서 화면이 변하지 않음
                console.log(obj.num)
                
                // (obj) 는 처음에 선언된 친구여서 화면을 바꿔주지 않았음!
                //setObj(obj)

                // 새로운 객체를 만들어서 줘야지만 내가 알던애가 아니구나 바꿔줘야 하는구나! 하고 인식을 하고 변경을 해줌
                // setObj({num : obj.num})
                
                // 지금은 num만 있는데 나중에 이름 , 속성 이런부분이 더 추가되면 하나하나 바꿔주기 번거로워서 저거 spreadOperator 를 써서 한번에 바꿔준대
                setObj({...obj})

            }}>INC</button>
        </div>
     );
}
 
export default Counter2;