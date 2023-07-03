import axios from "axios"
import { useEffect, useState } from "react"

const ProductList = ({requestViewProduct}) => {

    const [obj , setObj] = useState([])
    console.log(obj)


    useEffect(() => { 
    axios.get('http://localhost/products').then(res => {
        console.log(res.data)

        // useEffect를 해주지 않으면 무한 루프에 걸림
        // 브라우저를 종료해야만 종료 가능
        setObj(res.data)
    })

} , [])

    if(obj.length === 0 ){
        return(
            <div className="text-4xl">Loading...</div>
        )
    } 

    return ( 
        <ul>
            {obj.map(p => <li 
            onClick={() => requestViewProduct(p.id)}
            key={p.id}
            >{p.pname} - {p.price} 
            </li>)}
        </ul>
     );
}
 
export default ProductList;