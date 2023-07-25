import { Link } from "react-router-dom";

const Navbar = () => {
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="login">Login</Link></li>
        <button></button>
    </>
    return (
        <div className="bg-base-200 sticky top-0">
            <div className="flex p-2 min-h-16 w-10/12 mx-auto">
                <div className="w-full flex justify-between">
                    <div className="lg:flex items-center">
                        <h1 className="text-3xl font-bold text-yellow-600">Job<span className="text-black">Find</span></h1>
                        <div className="lg:ml-8 w-full hidden lg:block">
                            <input type="text" placeholder="job title" className="input input-bordered w-80 rounded-r" />
                        </div>
                        <div className="w-full hidden lg:block">
                            <input type="text" placeholder="location" className="input input-bordered w-full rounded-none" />
                        </div>
                        <div className="w-full hidden lg:block">
                            <input type="text" placeholder="type" className="input input-bordered w-full rounded-l-none" />
                        </div>
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <div className="flex justify-end w-full">
                        <ul className="menu menu-horizontal px-1 flex-nowrap">
                            {navItem}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;