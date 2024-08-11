export const Homebar = () => {
    return <div>
              <div className="shadow-2xl h-20 pt-3 pb-5 flex justify-between">
                <img className=" rounded-full h-13 w-17 cursor-pointer " src="money.jpg"/>
                <div className="flex-row-reverse space-x-2">
                  <button  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl">
                     Sigup
                 </button>
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl">
                       Signin
                    </button>
               </div>
            </div>
            </div>
}