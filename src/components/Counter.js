import { useState } from "react"

const Counter = () => {

    console.log("render...........")

    const [num, setNum] = useState(1) // 상태로 시작하는 값을 1로 지정 (1)
    

    const handleClick = (amount) => {

        setNum(num+amount)

        console.log("click" , num)

    }

    //  const handleClick = (amount) =>{
    //      console.log("click")
    //      num += amount 

    //     console.log("click" , num)
    // }

    return ( 
        <div className="w-full bg-lime-300 h-1/2">
            <div className="text-5xl text-white">
                {num}
            </div>
            {/* ml -> marginLeft */}
            <button className="w-10 bg-pink-400 text-white font-bold"
            onClick={() => handleClick(1)}
            >
                INC
            </button>

            <button className="w-10 ml-10 bg-pink-400 text-white font-bold"
            onClick={() => handleClick(-1)}
            >
                DEC
            </button>
        </div>
     );
}

export default Counter;