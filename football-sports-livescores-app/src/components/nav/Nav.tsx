import { Link } from "react-router-dom";
import { pagesData } from "../../router/pagesData";

export default function Nav() {
    return (
        <>
            <div className="pb-4 border-t-2 w-full fixed bottom-0 bg-[#4C1D52]">
                <nav className="m-auto min-[340px]:w-[340px]">
                    <ul className="flex justify-between pt-4 items-center">
                        {pagesData.slice(1).map((navItem, index) => {
                            const titleFirstLetter = navItem.title.charAt(0).toUpperCase();
                            const restOfTitle = navItem.title.slice(1);
                            return (
                                <Link aria-label={`${navItem.title} navigation option`} to={navItem.path} key={index} className="px-2 flex flex-col gap-2 items-center text-14 font-medium font-poppins text-white">
                                    <span>{navItem.icon}</span>
                                    {`${titleFirstLetter}${restOfTitle}`}
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}
