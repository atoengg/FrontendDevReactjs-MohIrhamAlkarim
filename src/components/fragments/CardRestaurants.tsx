import { Link } from "react-router-dom";
import { Rating } from "../elements/Rating";

type CardRestaurantsProps = {
    id: string;
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
        <div className="w-full flex flex-col gap-2 mb-8 h-full">
            <div className="flex-grow">
                <img src={item.image} alt={item.restoName} className="object-cover bg-center w-full h-56" />
            </div>
            <p className="text-xl font-semibold mt-3">{item.restoName}</p>
            <Rating rating={item.rating} />
            <div className="flex items-center justify-between mt-2">
                <p className="text-sm">{item.categories} - ${item.price}</p>
                <p className="text-sm flex items-center gap-1">
                    {item.status ? (
                        <span className="indicator-item badge badge-success badge-xs"></span>
                    ) : (
                        <span className="indicator-item badge badge-error badge-xs"></span>
                    )}
                    {item.status ? "Open" : "Closed"}
                </p>
            </div>

            <Link to={`/detail/${item.id}`} className="btn bg-blue-900 uppercase text-white mt-3 rounded-none hover:bg-blue-950">
                <button type="button">Learn more</button>
            </Link>
        </div>
    );
};
