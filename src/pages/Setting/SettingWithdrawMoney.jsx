function  SettingWithdrawMoney(){
    return(
        <div className="ml-48 mt-20 text-white bg-vinh ">
        <div className="ml-64 ">
                    <h2 className=" ml-80 pt-9 font-medium text-xl">Withdraw</h2>
              <div className="bg bg-my-color rounded-lg ">
                    <form className="">
                <div className="space-y-1">
                  <div className="border-b border-gray-900/10 ">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4 mt-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 ml-4 text-white-900 opacity-50">
                          Project
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            className=" ml-4 block h-12 input rounded-md border-0 py-1.5 bg-input-text shadow-sm  placeholder:text-gray-400 placeholder: opacity-50 sm:text-sm sm:leading-6"
                            placeholder="  janesmith"
                          />
                        </div>
                      </div>       
                    </div>
                  </div>
  
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4 ml-4">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white-900 opacity-50">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"              
                            className="block h-12 input1 rounded-md border-0 py-1.5  shadow-sm placeholder:text-gray-400 placeholder: opacity-50 sm:text-sm sm:leading-6 bg-input-text"
                            placeholder="  janesmith"
                          />
                        </div>
                      </div>
  
                      <div className="sm:col-span-2 ml-4 ">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white-900 opacity-50">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"                      
                            className="block h-12 input2 rounded-md border-0 py-1.5 shadow-sm placeholder:text-gray-400 placeholder: opacity-50 sm:text-sm sm:leading-6 bg-input-text" 
                            placeholder="  1000"
                          />
                        </div>
                      </div>
                <div className="col-span-full">
                <label htmlFor="about" className=" ml-4 block text-sm font-medium leading-6 text-white-900 opacity-50">
                  Note
                </label>
                <div className="mt-2">
                  <textarea
                    rows={3}
                    className="block h-44 input3 ml-4 rounded-md border-0 py-1.5  shadow-sm placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 bg-input-text "
                    defaultValue={''}
                  />
                </div>
              </div>                
                    </div>
                  </div>          
                </div>
  
        <div className="mt-1 flex items-center justify-center gap-x-6">
          <button type="button" className="border-2 border-white-500 px-5 rounded-lg py-2 text-sm font-semibold leading-6 text-white-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md  bg-indigo-600  py-3 px-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
          
        </div>
        <div className="text-gray-400">.</div>
                     </form>
                </div>
              
        </div>
        <div className="text-gray-950">s</div>
      </div>
    )
}
export default SettingWithdrawMoney