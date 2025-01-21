import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NavFilter } from "../elements/NavFilter";

type HeaderProps = {
    onFilterOpenNow: (value: boolean) => void;
    onFilterPrice: (value: string) => void;
    onFilterCategory: (value: string) => void;
    onClearFilters: () => void;
};

export const Header = ({ onFilterOpenNow, onFilterPrice, onFilterCategory, onClearFilters }: HeaderProps) => {

    const { logout } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            logout();
            navigate('/')
        }
    }

    return (
        <>
            <header className="container px-6 max-w-full ">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-4xl my-4">Restaurants</h1>
                        <p className="font-light text-gray-500 w-2/3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere rerum quos
                            corporis voluptatem? Omnis at nostrum perferendis quod labore.
                        </p>
                    </div>

                    <div className="btn btn-error text-white" onClick={handleLogout}>Logout</div>
                </div>
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
