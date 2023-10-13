import { PiSoccerBallFill } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { Navigate } from "react-router-dom";
import { routerType } from "@/router-types/routerType";
import MatchesPage from "@/features/matchesPage/MatchesPage";
import LeaguesPage from "@/features/leaguesPage/LeaguesPage";
import StatsPage from "@/features/statsPage/StatsPage";
import NewsPage from "@/features/newsPage/NewsPage";

const iconStyling = "text-[2rem] text-white";

export const pagesData: routerType[] = [
    { path: "/", element: <Navigate to={"/matches"} />, title: "Home" },
    { path: "/matches", element: <MatchesPage />, title: "matches", icon: <PiSoccerBallFill className={iconStyling} /> },
    { path: "/leagues", element: <LeaguesPage />, title: "leagues", icon: <BiNews className={iconStyling} /> },
    { path: "/stats", element: <StatsPage />, title: "stats", icon: <AiFillTrophy className={iconStyling} /> },
    { path: "/news", element: <NewsPage />, title: "news", icon: <IoIosStats className={iconStyling} /> },
];
