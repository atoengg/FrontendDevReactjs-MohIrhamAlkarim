type RatingProps = {
    rating: number;
};

export const Rating = ({ rating }: RatingProps) => {
    const fullStars = Math.floor(rating / 20);
    const halfStar = rating % 20 >= 10;

    return (
        <div className="rating rating-md rating-half">
            {Array.from({ length: 5 }).map((_, index) => {
                if (index < fullStars) {
                    return <input key={index} type="" name="rating" className="mask mask-star-2 bg-blue-700" checked readOnly />;
                } else if (index === fullStars && halfStar) {
                    return <input key={index} type="" name="rating" className="mask mask-half-1 mask-star-2  bg-blue-700 w-4 h-4" checked readOnly />
                } else {
                    return <input key={index} type="" name="rating" className="mask mask-star-2 bg-gray-300" readOnly />;
                }
            })}
        </div>
    );
};
