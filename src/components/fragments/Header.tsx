import { NavFilter } from "../elements/NavFilter"

export const Header = () => {
    return (
        <>
            <header className="container px-6 max-w-full">
                <h1 className="text-4xl my-4">Restaurants</h1>
                <p className="font-light text-gray-500 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere rerum quos corporis voluptatem? Omnis at nostrum perferendis quod labore.</p>
                <NavFilter />
            </header>
        </>
    )
}
