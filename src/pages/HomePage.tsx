import { useEffect, useState } from "react";
import { CardRestaurants } from "../components/fragments/CardRestaurants"
import { Header } from "../components/fragments/Header"
import axios from "axios";

export const HomePage = () => {

    const [allResto, setAllResto] = useState([]);


    const apiUrlResto = import.meta.env.VITE_API_URL_RESTAURANTS;

    useEffect(() => {
        // setLoading(true);
        axios
            .get(`${apiUrlResto}/restaurants`)
            .then((res) => {
                setAllResto(res.data);
                console.log(res.data)
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                // setLoading(false);
            });
    }, []);



    return (
        <>
            <Header />
            <main className="container px-6 my-8 max-w-full">
                <section>
                    <h2 className="text-2xl mb-6">All Restaurants</h2>
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
                        {
                            allResto?.map((item) => (
                                <CardRestaurants key={item.id} {...item} />
                            ))
                        }

                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-outline px-20 rounded-none uppercase hover:bg-blue-900 hover:text-white">load more</button>
                    </div>
                </section>
            </main>
        </>
    )
}
