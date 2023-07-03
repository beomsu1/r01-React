import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Kiosk = () => {

    // tno값을 0으로 설정하고 setTarget 함수로 target의 상태를 변경
    const [target, setTarget] = useState({pno:0})

    const [wanted , setWanted] = useState(null)

    // 호출하면 id (번호) 값을 받아서 콘솔창에 출력
    const requestViewProduct = (id) => {
    console.log("requestViewProduct" , id)

    // id 값을 받아와서 pno에 id 값을 넣고 setTartget 함수로 target의 상태를 업데이트
    setTarget({pno:id})

    }

    
    const requestBuy = (product) => {
        console.log("requestBuy")
        console.log(product)

        setWanted(product)
    }   

    return ( 
        <div>
            <ProductList requestViewProduct={requestViewProduct}></ProductList>

            {/* ProductDetail 컴포넌트를 렌더링하면서 targetID 값을 id 속성으로 전달 */}
            <ProductDetail target={target} requestBuy={requestBuy}></ProductDetail>
            <Cart {...wanted}></Cart>
        </div>
     );
}
 
export default Kiosk;