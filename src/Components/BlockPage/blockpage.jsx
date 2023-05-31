

function BlockPage({children}){
    return(
        <aside className="bg-black/60 backdrop-blur-sm w-full h-screen absolute z-50 grid place-content-center">
            {children}
        </aside>
    )
}
 export default BlockPage