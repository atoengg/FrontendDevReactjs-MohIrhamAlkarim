import { Rating } from "../elements/Rating";

type CardRestaurantsProps = {
    restoName: string;
    image: string;
    categories: string;
    status: boolean;
    price: number;
    rating: number;
}

export const CardRestaurants = (props: CardRestaurantsProps) => {

    const item = { ...props };

    return (
        <>
            <div className="w-full flex flex-col gap-2 mb-8">
                <div className="w-full h-auto bg-gray-300">
                    <img src={item.image} alt="" />
                </div>
                <p className="">{item.restoName}</p>
                <Rating rating={item.rating} />
                <div className="flex items-center justify-between">
                    <p className="text-sm">{item.categories} - ${item.price}</p>
                    <p className="text-sm flex items-center gap-1">
                        {
                            item.status ?
                                <span className="indicator-item badge badge-success badge-xs"></span>
                                :
                                <span className="indicator-item badge badge-error badge-xs"></span>
                        }
                        {item.status ? "Open" : "Closed"}
                    </p>
                </div>

                <button className="btn bg-blue-900 uppercase text-white mt-3 rounded-none hover:bg-blue-950">Learn more</button>
            </div>
        </>
    )
}
