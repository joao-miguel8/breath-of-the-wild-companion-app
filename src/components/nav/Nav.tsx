import { Link } from "react-router-dom";
import { pagesData } from "../../router/pagesData";

export default function Nav() {
    return (
        <>
            <div className="pb-4 w-full fixed bottom-0 bg-[#161616]">
                <nav className="px-4 m-auto min-[340px]:w-[340px]">
                    <ul className="flex justify-between pt-4 items-center">
                        {pagesData.slice(1).map((navItem, index) => {
                            const titleFirstLetter = navItem.title.charAt(0).toUpperCase();
                            const restOfTitle = navItem.title.slice(1);
                            return (
                                <Link aria-label={`${navItem.title} navigation option`} to={navItem.path} key={index} className=" flex flex-col gap-2 items-center text-12 font-medium font-poppins text-[#A2A2A2]">
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
