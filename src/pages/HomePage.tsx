import { CardRestaurants } from "../components/fragments/CardRestaurants"
import { Header } from "../components/fragments/Header"

export const HomePage = () => {
    return (
        <>
            <Header />
            <main className="container px-6 my-8 max-w-full">
                <section>
                    <h2 className="text-2xl mb-6">All Restaurants</h2>
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
                        <CardRestaurants />
                        <CardRestaurants />
                        <CardRestaurants />
                        <CardRestaurants />
                        <CardRestaurants />
                        <CardRestaurants />
                        <CardRestaurants />
                        <CardRestaurants />
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-outline px-20 rounded-none uppercase hover:bg-blue-900 hover:text-white">load more</button>
                    </div>
                </section>
            </main>
        </>
    )
}
