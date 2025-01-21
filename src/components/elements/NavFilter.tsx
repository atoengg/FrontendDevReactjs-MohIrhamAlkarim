import { useState } from "react";

type NavFilterProps = {
    onFilterOpenNow: (value: boolean) => void;
    onFilterPrice: (value: string) => void;
    onFilterCategory: (value: string) => void;
    onClearFilters: () => void;
};

export const NavFilter = ({ onFilterOpenNow, onFilterPrice, onFilterCategory, onClearFilters }: NavFilterProps) => {
    const [isOpenNowChecked, setIsOpenNowChecked] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleClearAll = () => {
        setIsOpenNowChecked(false);
        setSelectedPrice("");
        setSelectedCategory("");
        onClearFilters();
    };

    return (
        <>
            <nav className="px-6 py-4 mt-4 border-y border-gray-400 w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-row gap-4">
                        <p>Filter By:</p>

                        {/* Open Now */}
                        <div className="flex items-center gap-2 shadow-md p-3">
                            <input
                                type="checkbox"
                                id="openNow"
                                checked={isOpenNowChecked}
                                onChange={(e) => {
                                    setIsOpenNowChecked(e.target.checked);
                                    onFilterOpenNow(e.target.checked);
                                }}
                            />
                            <label htmlFor="openNow" className="text-sm">
                                Open Now
                            </label>
                        </div>

                        {/* Price Range */}
                        <div className="relative shadow-md">
                            <select
                                className="block select appearance-none w-full text-gray-700 rounded leading-tight focus:outline-none text-sm focus:bg-white focus:border-gray-500"
                                id="priceFilter"
                                value={selectedPrice}
                                onChange={(e) => {
                                    setSelectedPrice(e.target.value);
                                    onFilterPrice(e.target.value);
                                }}
                            >
                                <option value="">Price</option>
                                <option value="0-50">$0 - $50</option>
                                <option value="51-100">$51 - $100</option>
                                <option value="101-200">$101 - $200</option>
                            </select>
                        </div>

                        {/* Categories */}
                        <div className="relative shadow-md">
                            <select
                                className="block select appearance-none w-full text-gray-700 pr-20 rounded leading-tight focus:outline-none text-sm focus:bg-white focus:border-gray-500"
                                id="categoryFilter"
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    onFilterCategory(e.target.value);
                                }}
                            >
                                <option value="">Categories</option>
                                <option value="Asian">Asian</option>
                                <option value="Italian">Italian</option>
                                <option value="Fast Food">Fast Food</option>
                            </select>
                        </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="border border-gray-400 px-6 py-2">
                        <button
                            type="button"
                            className="uppercase text-gray-500"
                            onClick={handleClearAll}
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
