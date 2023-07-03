import axios from "axios";
import { useEffect, useState } from "react";

// 
const initState = {
    id : 0 ,
    pname : '',
    price : 0
}

const ProductDetail = ({target , requestBuy}) => {

    // 초기값을 inistate값으로 설정하고 setProduct 함수를 이용해 product 값을 변경하자
    const [product , setProduct] = useState(initState)


    useEffect(() => {
        console.log("useEffect--------" , target)

        // 가져온 target의 pno를 id라는 변수로 만들자
        const id = target.pno


        // id가 0이 아닐떄 axios 호출
        if(id !== 0 ){
            axios.get(`http://localhost:80/products/${id}`).then(res =>{
                setProduct(res.data)
            })
        }
    
        // 의존성이 target으로 되어있기에 target값이 변경될 때 마다 렌더링 실행
    },[target])

    return ( 
        <div>
            <div>ProductDetail</div>
                <div>
                    <div>ID {product.id}</div>
                    <div>PNAME {product.pname}</div>
                    <div>PRICE {product.price}</div>
                </div>
                <div>
                    <button className="bg-pink-300 text-white" 
                    onClick={() => requestBuy(product)}>
                        ADD Cart
                    </button>
                </div>
        </div>
     );
}
 
export default ProductDetail;