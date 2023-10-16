import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="h-screen bg-[url(http://www.zelda.com/breath-of-the-wild/assets/img/patterns/black.jpg)] center top">
            <div className="pt-40 flex flex-col items-center ">
                <img className="w-80" src="https://www.zelda.com/breath-of-the-wild/assets/img/header/zelda-botw-logo_2x.png" />
                <p className="mt-2 max-w-[400px] text-[1.2rem] text-center text-[#FAF7DC]">This is a directory of creatures, equipment, treasures and more...</p>
                <Link to={"/creatures"} className="mt-8 relative inline-flex items-center justify-center p-4 px-14 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#FAF7DC] rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FAF7DC] group-hover:translate-x-0 ease">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="text-[1.4rem] absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Venture On</span>
                    <span className="relative invisible">Venture On</span>
                </Link>
            </div>
        </div>
    );
}
