import { useEffect, useState } from "react";

const Cart = ({id, pname, price}) => {

    const [items, setItems] = useState([])

    console.log("Cart" , id,pname,price)

    useEffect(() => {

        if(!id || id === 0){
            return
        }

        const itemCheck = items.filter(item => item.id === id);

        if (itemCheck.length === 0) {
          // 기존 상품이 없으면 새로운 상품 추가
          setItems([...items, { id, pname, price, qty: 1 }]);
        } 
          // 상품이 있을 떄 qty값 추가하는 코드
            
            


    }, [id, pname, price])

    return ( 
        <div>
            <div className="text-5xl">Cart</div>
            <ul>
                {items.map((cartItem , idx) => 
                <li key={idx}>{cartItem.pname} - {cartItem.price} - {cartItem.qty}</li>
                )}
            </ul>
        </div>
     );
}
 
export default Cart;