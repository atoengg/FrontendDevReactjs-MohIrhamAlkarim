import { useEffect, useState } from "react";
import { CardRestaurants } from "../components/fragments/CardRestaurants";
import { Header } from "../components/fragments/Header";
import axios from "axios";

export const HomePage = () => {
    const [allResto, setAllResto] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    const [visibleResto, setVisibleResto] = useState([]);
    const [openNow, setOpenNow] = useState(false);
    const [priceRange, setPriceRange] = useState("");
    const [category, setCategory] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const apiUrlResto = import.meta.env.VITE_API_URL_RESTAURANTS;

    // Fetch semua data restaurants
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`${apiUrlResto}/restaurants`)
            .then((res) => {
                setAllResto(res.data);
                console.log('respon data:', res.data);
                setFilteredResto(res.data);
                setVisibleResto(res.data.slice(0, itemsPerPage));
                setIsLoading(false)

            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false)
            });
    }, []);

    // filter client-side (Open Now & Price)
    useEffect(() => {
        let filtered = allResto;

        if (openNow) {
            filtered = filtered.filter((item) => item.status === true);
        }

        if (priceRange) {
            const range = priceRange.split("-").map((p) => parseInt(p.trim()));
            filtered = filtered.filter((item) => item.price >= range[0] && item.price <= range[1]);
        }

        if (filtered.length === 0) {
            setErrorMessage("Mohon maaf tidak ada restoran yang sesuai dengan kriteria.");
        } else {
            setErrorMessage("");
        }

        setFilteredResto(filtered);
        setCurrentPage(1);
        setVisibleResto(filtered.slice(0, itemsPerPage));
    }, [openNow, priceRange, allResto]);

    // Fetch data restaurants untuk filter category (server-side)
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        axios
            .get(`${apiUrlResto}/restaurants?categories=${selectedCategory}`)
            .then((res) => {
                setFilteredResto(res.data);
                setCurrentPage(1);
                setVisibleResto(res.data.slice(0, itemsPerPage));

                if (res.data.length === 0) {
                    setErrorMessage("Mohon maaf tidak ada restoran yang sesuai dengan kriteria..");
                } else {
                    setErrorMessage("");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Load more item
    const handleLoadMore = () => {
        setIsLoading(true)

        setTimeout(() => {
            const nextPage = currentPage + 1;
            const nextVisibleResto = filteredResto.slice(0, nextPage * itemsPerPage);
            setVisibleResto(nextVisibleResto);
            setCurrentPage(nextPage);
            setIsLoading(false)
        }, 500)

    };


    return (
        <>
            <Header
                onFilterOpenNow={(value) => setOpenNow(value)}
                onFilterPrice={(value) => setPriceRange(value)}
                onFilterCategory={(value) => handleCategoryChange(value)}
                onClearFilters={() => {
                    setOpenNow(false);
                    setPriceRange("");
                    setCategory("");
                    setFilteredResto(allResto);
                    setCurrentPage(1);
                    setVisibleResto(allResto.slice(0, itemsPerPage));
                    setErrorMessage("");
                }}
            />
            <main className="container px-6 my-8 max-w-full">
                <section>
                    <h2 className="text-2xl mb-6">All Restaurants</h2>

                    {isLoading ? (
                        <div className="text-center font-semibold mb-6">
                            <p>loading.....</p>
                        </div>
                    )
                        : (errorMessage && (
                            <div className="text-center text-red-500 mb-6">
                                <p>{errorMessage}</p>
                            </div>
                        ))
                    }

                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
                        {

                            visibleResto.map((item) => (
                                <CardRestaurants key={item.id} {...item} />
                            ))

                        }

                    </div>


                    {/* Button Load More */}
                    {!errorMessage && visibleResto.length < filteredResto.length && (
                        <div className="flex justify-center">
                            <button
                                className="btn btn-outline px-20 rounded-none uppercase hover:bg-blue-900 hover:text-white"
                                onClick={handleLoadMore}
                                disabled={isLoading}
                            >
                                {isLoading ? "Loading..." : "Load More"}
                            </button>
                        </div>
                    )}
                </section>
            </main >
        </>
    );
};
