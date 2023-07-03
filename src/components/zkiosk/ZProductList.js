
// 매번 새로운 배열을 만들 필요는 없기에 함수 밖에다 변수 선언
const product = [
    {pno:1 , pname: 'Americano' , price : 5000},
    {pno:2 , pname: 'Ade' , price : 3000},
    {pno:3 , pname: 'Smoothie' , price : 7000},
    {pno:4 , pname: 'Latte' , price : 9000},
]


const ZProductList = ({buyProduct , viewProduct}) => {
    return ( 
        <div className="w-full bg-pink-300 text-3xl m-12 p-10">
            <ul>
                {product.map(p => 
                <li key={p.pno}>{p.pname}
                <button className="bg-red-500" onClick={() => buyProduct({...p})}>BUY</button>
                </li>)}
            </ul>
        </div>
     );
}
 
export default ZProductList;