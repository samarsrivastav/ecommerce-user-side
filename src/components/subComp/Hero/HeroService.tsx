
export const HeroService = () => {
  return (
        <div className="services flex justify-center" >
            <div className="grid md:grid-cols-3 grid-cols-1 rounded bg-white shadow-lg w-[60%] z-10 -mt-5 p-5">
                <div className="item text-black text-center p-3 space-y-2">
                    <img src="/vite.svg" alt="" className="h-10 text-center w-full"/>
                    <h1 className="font-medium text-xl">Item heading</h1>
                    <p className="font-thin text-sm">Item description description</p>
                </div>
                <div className="item text-black text-center p-3 space-y-2">
                    <img src="/vite.svg" alt="" className="h-10 text-center w-full"/>
                    <h1 className="font-medium text-xl">Item heading</h1>
                    <p className="font-thin text-sm">Item description description</p>
                </div>
                <div className="item text-black text-center p-3 space-y-2">
                    <img src="/vite.svg" alt="" className="h-10 text-center w-full"/>
                    <h1 className="font-medium text-xl">Item heading</h1>
                    <p className="font-thin text-sm">Item description description</p>
                </div>
            </div>
        </div>
  )
}
