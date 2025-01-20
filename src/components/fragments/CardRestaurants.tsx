

export const CardRestaurants = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-2 mb-8">
                <div className="w-full h-60 bg-gray-300">
                    <img src="" alt="" />
                </div>
                <p>title Restaurants</p>
                <div className="rating rating-sm rating-half">
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-1 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-2 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-1 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-2 bg-blue-700" />
                    <input
                        type=""
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-blue-700"
                    />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-2 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-1 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-2 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-1 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-2 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-1 bg-blue-700" />
                    <input type="" name="rating-10" className="mask mask-star-2 mask-half-2 bg-blue-700" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm">place - $price</p>
                    <p className="text-sm flex items-center gap-1">
                        <span className="indicator-item badge badge-success badge-xs"></span>
                        Open
                    </p>
                </div>

                <button className="btn bg-blue-900 uppercase text-white mt-3 rounded-none hover:bg-blue-950">Learn more</button>
            </div>
        </>
    )
}
