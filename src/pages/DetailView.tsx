import { useParams } from "react-router-dom";
import { Rating } from "../components/elements/Rating";
import { useEffect, useState } from "react";
import axios from "axios";

export const DetailView = () => {
    const [resto, setResto] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const apiUrlResto = import.meta.env.VITE_API_URL_RESTAURANTS;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${apiUrlResto}/restaurants/${id}`)
            .then((res) => {
                setResto(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id, apiUrlResto]);

    if (loading) {
        return <div className="h-screen flex items-center justify-center font-semibold">Loading...</div>;
    }

    if (!resto) {
        return <div className="h-screen flex items-center justify-center font-semibold">Restaurant not found.</div>;
    }

    return (
        <section className="container px-6 my-8 max-w-full">
            <div className="flex flex-col">
                <h2 className="text-4xl mb-6 font-semibold">{resto.restoName}</h2>

                <div className="flex items-center gap-4">
                    <Rating rating={resto.rating} />
                    <h2 className="text-sm font-light">{resto.rating}%</h2>
                </div>

                <div className="">
                    <p className="mt-6">{resto.description}</p>
                    <p className="mt-6 text-sm text-gray-500">Categories: {resto.categories}</p>
                </div>

                {resto.reviews && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Reviews</h3>
                        <div className="space-y-4">
                            {resto.reviews.map((review: any, index: number) => (
                                <div key={index} className="border-t pt-4">
                                    <h4 className="font-semibold my-4">{review.name}</h4>
                                    <div className="flex items-center gap-4">
                                        <Rating rating={review.rating} />
                                        <h2 className="text-sm font-light">{review.rating}%</h2>
                                    </div>
                                    <img src={review.imgReview} alt="" className="w-48 h-48 my-4" />
                                    <p className="text-sm ">{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
