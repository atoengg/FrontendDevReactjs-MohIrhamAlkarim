import { NavFilter } from "../elements/NavFilter";

type HeaderProps = {
    onFilterOpenNow: (value: boolean) => void;
    onFilterPrice: (value: string) => void;
    onFilterCategory: (value: string) => void;
    onClearFilters: () => void;
};

export const Header = ({ onFilterOpenNow, onFilterPrice, onFilterCategory, onClearFilters }: HeaderProps) => {
    return (
        <>
            <header className="container px-6 max-w-full">
                <h1 className="text-4xl my-4">Restaurants</h1>
                <p className="font-light text-gray-500 w-2/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere rerum quos
                    corporis voluptatem? Omnis at nostrum perferendis quod labore.
                </p>
                <NavFilter
                    onFilterOpenNow={onFilterOpenNow}
                    onFilterPrice={onFilterPrice}
                    onFilterCategory={onFilterCategory}
                    onClearFilters={onClearFilters}
                />
            </header>
        </>
    );
};
