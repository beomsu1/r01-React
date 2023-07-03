const TemplatePage = ({children}) => {

console.log("children-------------")
console.log(children)

const [header , main , footer] = children // 배열로 선언

    return ( 
        <div className="w-100 bg-gray-400 justify-center items-center h-[100vh]">
            <div className="h-[20vh] bg-red-200">
                {/* == {children[0]} */}
                {header}  
            </div>
            <div className="h-[60vh] bg-green-200">
                {/* == {children[1]} */}
                {main}
            </div>
            <div className="h-[20vh] bg-purple-200">
                {/* == {children[2]} */}
                {/* div가 없어도 small footer라는 글씨 출력 */}
                {footer || <h1>small footer</h1>}
            </div>
        </div>
     );
}
 
export default TemplatePage;