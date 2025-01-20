
export const NavFilter = () => {
    return (
        <>
            <nav className="px-6 py-4 mt-4 border-y border-gray-400 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-row gap-4">
                        <p>Filter By:</p>
                        <div className="flex items-center gap-2 shadow-md p-2">
                            <input type="radio" name="" id="" />
                            <label htmlFor="" className="text-sm">Open Now</label>
                        </div>

                        <div className="relative shadow-md">
                            <select className="block appearance-none w-full text-gray-700 p-2 pr-20 rounded leading-tight focus:outline-none text-sm focus:bg-white focus:border-gray-500" id="grid-state">
                                <option className="text-sm">Price</option>
                                <option className="text-sm">Missouri</option>
                                <option className="text-sm">Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                        <div className="relative shadow-md">
                            <select className="block appearance-none w-full text-gray-700 p-2 pr-20 rounded leading-tight focus:outline-none text-sm focus:bg-white focus:border-gray-500" id="grid-state">
                                <option className="text-sm">Categories</option>
                                <option className="text-sm">Missouri</option>
                                <option className="text-sm">Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                    </div>

                    <div className="border border-gray-400 px-6 py-2">
                        <button type="button" className="uppercase text-gray-500">
                            clear all
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
