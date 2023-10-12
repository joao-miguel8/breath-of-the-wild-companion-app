import { PiSoccerBallFill } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Nav() {
    const iconStyling = { size: "1.8rem", color: "white" };
    const navList: { title: string; navLink: string; icon: JSX.Element }[] = [
        { title: "Matches", navLink: "/matches", icon: <PiSoccerBallFill size={iconStyling.size} color={iconStyling.color} /> },
        { title: "Leagues", navLink: "/leagues", icon: <AiFillTrophy size={iconStyling.size} color={iconStyling.color} /> },
        { title: "Stats", navLink: "/stats", icon: <IoIosStats size={iconStyling.size} color={iconStyling.color} /> },
        { title: "News", navLink: "/news", icon: <BiNews size={iconStyling.size} color={iconStyling.color} /> },
    ];

    return (
        <>
            <div className="pb-4 border-t-2 w-full fixed bottom-0 bg-[#4C1D52]">
                <nav className="m-auto min-[340px]:w-[340px]">
                    <ul className="flex justify-between pt-4 items-center">
                        {navList.map((navItem, index) => {
                            return (
                                <Link aria-label={`${navItem.title} navigation option`} to={navItem.navLink} key={index} className="px-2 flex flex-col gap-2 items-center text-14 font-medium font-poppins text-white">
                                    <span>{navItem.icon}</span>
                                    {navItem.title}
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}
