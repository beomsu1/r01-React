import { useState } from "react";
import ZCart from "./ZCart";
import ZProductList from "./ZProductList";

const ZKiosk = () => {  

    // 빈 배열인 items 변수 생성 , setItems -> items의 상태를 업데이트하기 위한 함수 
    const [items, setItems] = useState([])

    const buyProduct = (product) => {
        console.log("buyProduct", product)

        const targetArr = items.filter(item => item.pno === product.pno)

        if(targetArr.length === 0){
            // items의 배열을 복사하고 그 뒤에 {...product,qty:1} 추가한 배열을 생성
            setItems([...items,{...product,qty:1}])
            return
        }

        targetArr[0].qty += 1
        setItems([...items])


        
    }

    const viewProduct = () => {
        console.log("viewProduct")
    }

    const changeQty = (pno , amount) => {
        console.log("changeQty")

        const targetItem = items.filter(item => item.pno === pno)[0]
        targetItem.qty += amount

        setItems([...items])

        if(targetItem.qty === 0){
            setItems(items.filter(item => item.pno !== pno))
            return
        }
    }
    
    return ( 
        <div>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>
        </div>  
     );
}
 
export default ZKiosk;