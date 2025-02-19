import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    return (
        <>
            <nav className="bg-white text-black p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">Conference</Link>

                    {/* Mobile Menu Button */}
                    <div className="mr-3 md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
                            <SlMenu />
                        </button>
                    </div>

                    {/* Mobile Sliding Menu */}
                    <div className={`fixed top-0 left-0 w-64 h-full bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
                    >
                        <button onClick={closeMenu} className="text-black text-3xl absolute top-4 right-4">
                            <RxCross1 />
                        </button>

                        <div className="flex flex-col mt-12 space-y-6 px-6">
                            {["Home", "About", "Contact"].map((item) => (
                                <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-gray-400" onClick={closeMenu}>
                                    {item}
                                </Link>
                            ))}

                            {/* Dropdown */}
                            <div className="relative">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-400 flex items-center">
                                    Service <RiArrowDropDownLine className="text-2xl" />
                                </button>
                                {dropdownOpen && (
                                    <div className="mt-2 bg-white text-black divide-y divide-slate-300 shadow-md rounded-md">
                                        {["Web Development", "SEO", "Marketing"].map((service) => (
                                            <Link 
                                                key={service} 
                                                to={`/${service.toLowerCase().replace(" ", "-")}`} 
                                                className="block px-4 py-2 hover:bg-gray-200"
                                                onClick={closeMenu}
                                            >
                                                {service}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 w-screen justify-end text-lg">
                        {["Home", "About", "Contact"].map((item) => (
                            <Link 
                                key={item} 
                                to={`/${item.toLowerCase()}`} 
                                className="hover:text-gray-400 hover:underline hover:underline-offset-4"
                            >
                                {item}
                            </Link>
                        ))}

                        {/* Desktop Dropdown */}
                        <div className="relative">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-gray-400 flex items-center">
                                Service <RiArrowDropDownLine className="text-2xl" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 bg-white text-black shadow-md divide-y divide-slate-300 rounded-md w-48 z-50 max-h-60 overflow-auto">
                                    {["Web Development", "SEO", "Marketing"].map((service) => (
                                        <Link 
                                            key={service} 
                                            to={`/${service.toLowerCase().replace(" ", "-")}`} 
                                            className="block px-4 py-2 text-lg hover:bg-gray-200"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
