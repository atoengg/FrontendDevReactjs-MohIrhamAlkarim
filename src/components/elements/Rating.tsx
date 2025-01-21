import { BsStarHalf } from "react-icons/bs";

type RatingProps = {
    rating: number;
};

export const Rating = ({ rating }: RatingProps) => {
    const fullStars = Math.floor(rating / 20);
    const halfStar = rating % 20 >= 10;
    const maxStars = 5;

    return (
        <div className="flex items-center space-x-1">
            {Array.from({ length: maxStars }).map((_, index) => {
                if (index < fullStars) {
                    return (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-blue-700"
                        >
                            <path d="M12 .587l3.668 7.435L24 9.308l-6 5.84 1.42 8.285L12 18.765 4.58 23.433 6 15.148 0 9.308l8.332-1.286z" />
                        </svg>
                    );
                } else if (index === fullStars && halfStar) {
                    return (
                        <BsStarHalf key={index} className="w-4 h-4 text-blue-700" />
                    );
                } else {
                    return (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-gray-300"
                        >
                            <path d="M12 .587l3.668 7.435L24 9.308l-6 5.84 1.42 8.285L12 18.765 4.58 23.433 6 15.148 0 9.308l8.332-1.286z" />
                        </svg>
                    );
                }
            })}
        </div>
    );
};
