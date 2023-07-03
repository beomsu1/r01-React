const SampleLayout = ({children}) => {
    return ( 
        <div className="bg-blue-200 m-12 w-full h-[2vh]">
            <div className="h-[10vh] bg-red-300">
                Logo
            </div>
            {children}
        </div>
     );
}
 
export default SampleLayout;