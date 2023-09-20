
export default function Modal (){
  return (
    <div id = "overlay" className = "w-full h-screen bg-red z-20 absolute">
        <div role = "dialog" aria-modal = "true" aria-hidden = "true" className = "rounded-[4rem]"> 
    <h1 className ="text-white"  >Modal </h1>
          </div>
    </div>
    
    )
}